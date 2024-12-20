FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./

RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]



