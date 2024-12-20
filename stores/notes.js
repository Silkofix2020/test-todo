import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [],
  }),
  actions: {
    initialNotes() {
      const savedNotes = localStorage.getItem("notes");
      if (savedNotes) {
        this.notes = JSON.parse(savedNotes);
      }
    },
    addNote(note) {
      this.notes.push(note);
      this.saveToLocalStorage();
    },
    updateNote(id, updatedNote) {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes[index] = updatedNote;
        this.saveToLocalStorage();
        alert("Изменения сохранены!");
      }
    },
    removeNote(id) {
      let userConfirmed = confirm("Заметка будет удалена!");
      if (userConfirmed) {
        this.notes = this.notes.filter((note) => note.id !== id);
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
  },
});
