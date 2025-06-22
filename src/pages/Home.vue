<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/noteStore'
import { RouterLink } from "vue-router";

const store = useNoteStore()
const inputNote = ref('')

function tambah() {
  if (inputNote.value.trim()) {
    store.tambahNote(inputNote.value)
    inputNote.value = ''
  }
}
</script>

<template>
  <h1>Catatan Harian</h1>
  <input v-model="inputNote" placeholder="Tulis catatan..." />
  <button @click="tambah">Tambah</button>

  <ul>
    <li v-for="note in store.notes" :key="note.id">
      <RouterLink :to="`/note/${note.id}`">
        {{ note.teks }}
      </RouterLink>
      <button @click="store.hapusNote(note.id)">Hapus</button>
    </li>
  </ul>
</template>
