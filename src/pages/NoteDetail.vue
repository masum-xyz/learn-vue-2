<script setup>
import { useRoute } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'

const route = useRoute()
const store = useNoteStore()

const noteId = Number(route.params.id)
const note = store.notes.find(n => n.id === noteId)
</script>

<template>
  <div v-if="note">
    <h2>Detail Catatan</h2>
    <p><strong>ID:</strong> {{ note.id }}</p>
    <p><strong>Isi:</strong> {{ note.teks }}</p>
  </div>
  <div v-else>
    <p>Catatan tidak ditemukan.</p>
  </div>
</template>
