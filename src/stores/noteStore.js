import { defineStore} from "pinia";

export const useNoteStore = defineStore('note', {
    state: () => ({
        notes: JSON.parse(localStorage.getItem('notes') || '[]' ) ,
    }),

    actions: {
        tambahNote(teks) {
            this.notes.push({
                id: Date.now(),
                teks,
            })
            this.simpanNotes();
        },

        hapusNote(id) {
            this.notes = this.notes.filter(note => note.id !== id);
            this.simpanNotes();
        },

        simpanNotes() {
            localStorage.setItem('notes', JSON.stringify(this.notes));
        }
    }
})