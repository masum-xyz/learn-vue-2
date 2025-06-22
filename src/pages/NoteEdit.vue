<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'

const route = useRoute()
const router = useRouter()
const store = useNoteStore()

const id = Number(route.params.id)
const note = store.notes.find(n => n.id === id)

const title = ref(note?.title || '')
const content = ref(note?.content || '')

function updateNote() {
  if (title.value.trim() && content.value.trim()) {
    store.updateNote(id, title.value, content.value)
    router.push({ name: 'home' })
  }
}

function cancel() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="edit-container">
    <div v-if="note" class="edit-card">
      <h1 class="edit-title">Edit Catatan</h1>

      <div class="form-group">
        <label for="title">Judul</label>
        <input
          id="title"
          v-model="title"
          placeholder="Masukkan judul..."
          class="edit-input"
        />
      </div>

      <div class="form-group">
        <label for="content">Konten</label>
        <textarea
          id="content"
          v-model="content"
          placeholder="Masukkan konten catatan..."
          class="edit-textarea"
          rows="6"
        ></textarea>
      </div>

      <div class="button-group">
        <button @click="cancel" class="cancel-button">Batal</button>
        <button @click="updateNote" class="save-button">Simpan Perubahan</button>
      </div>
    </div>

    <div v-else class="not-found">
      <h2>Catatan tidak ditemukan</h2>
      <p>Catatan yang Anda cari tidak ada atau telah dihapus.</p>
      <button @click="cancel" class="back-button">
        Kembali ke Beranda
      </button>
    </div>
  </div>
</template>

<style scoped>
.edit-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.edit-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 25px;
}

.edit-title {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  position: relative;
}

.edit-title::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background-color: #4a90e2;
  margin: 10px auto 0;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
}

.edit-input, .edit-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border 0.3s ease;
}

.edit-input:focus, .edit-textarea:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

.edit-textarea {
  resize: vertical;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 30px;
}

.save-button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  transition: background-color 0.3s ease;
}

.save-button:hover {
  background-color: #3a7bc8;
}

.cancel-button {
  background-color: #f0f0f0;
  color: #333;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cancel-button:hover {
  background-color: #e0e0e0;
}

.not-found {
  text-align: center;
  background-color: white;
  border-radius: 8px;
  padding: 40px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.not-found h2 {
  color: #ff6b6b;
  margin-bottom: 10px;
}

.not-found p {
  color: #666;
  margin-bottom: 25px;
}

.back-button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #3a7bc8;
}
</style>