import { defineStore} from "pinia";

export const useNoteStore = defineStore('note', {
    state: () => ({
        notes: JSON.parse(localStorage.getItem('notes') || '[]' ) ,
    }),

    actions: {
        tambahNote(title, content) {
            this.notes.push({
                id: Date.now(),
                title,
                content
            })
            this.simpanNotes();
        },

        hapusNote(id) {
            this.notes = this.notes.filter(note => note.id !== id);
            this.simpanNotes();
        },

        simpanNotes() {
            localStorage.setItem('notes', JSON.stringify(this.notes));
        },

        updateNote(id, title, content) {
            const note = this.notes.find(note => note.id === id);
            if (note) {
                note.title = title;
                note.content = content;
                this.simpanNotes();
            }
        }
    }
})