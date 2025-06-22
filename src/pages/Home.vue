<script setup>
import {ref} from 'vue'
import {useNoteStore} from '../stores/noteStore'
import {RouterLink} from "vue-router";
import ConfirmationDialog from "../components/ConfirmationDialog.vue";

const store = useNoteStore()
const inputTitle = ref('')
const inputContent = ref('')
const showDeleteDialog = ref(false)
const noteToDelete = ref(null)

function tambah() {
  if (inputTitle.value.trim() && inputContent.value.trim()) {
    store.tambahNote(inputTitle.value, inputContent.value)
    inputTitle.value = ''
    inputContent.value = ''
  }
}

function showConfirmation(note) {
  noteToDelete.value = note
  showDeleteDialog.value = true
}

function confirmDelete() {
  if (noteToDelete.value) {
    store.hapusNote(noteToDelete.value.id)
    showDeleteDialog.value = false
    noteToDelete.value = null
  }
}

</script>

<template>
  <div class="notes-container">
    <h1 class="title">Catatan Harian</h1>

    <div class="input-group">
      <input
          v-model="inputTitle"
          placeholder="Tulis Judul..."
          class="note-input"
      />
      <textarea
          v-model="inputContent"
          placeholder="Tulis Deskripsi..."
          class="note-textarea"
          rows="3"
      ></textarea>
      <button @click="tambah" class="add-button">
        <span class="add-icon">+</span> Tambah Catatan
      </button>
    </div>

    <div class="notes-list">
      <div v-if="store.notes.length === 0" class="empty-state">
        Belum ada catatan. Buat catatan pertama Anda!
      </div>
      <ul v-else>
        <li v-for="note in store.notes" :key="note.id" class="note-item">
          <RouterLink :to="{ name: 'note-detail', params: { id: note.id }}" class="note-link">
            {{ note.title }}
          </RouterLink>
          <div class="note-actions">
            <RouterLink :to="{ name: 'note-edit', params: { id: note.id }}" class="edit-button">
              Edit
            </RouterLink>
            <button @click="showConfirmation(note)" class="delete-button">
              Hapus
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Confirmation Modal -->
    <ConfirmationDialog
        v-if="showDeleteDialog"
        @confirm="confirmDelete"
        @cancel="showDeleteDialog = false"
        title="Konfirmasi Hapus"
        message="Apakah Anda yakin ingin menghapus catatan ini?"
        confirmButtonText="Hapus"
    />
  </div>
</template>

<style scoped>
.notes-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  position: relative;
}

.title::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background-color: #4a90e2;
  margin: 10px auto 0;
}

.input-group {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.note-input, .note-textarea {
  width: 92%;
  padding: 12px 16px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border 0.3s ease;
}

.note-input:focus, .note-textarea:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

.note-textarea {
  resize: vertical;
}

.add-button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  width: 100%;
}

.add-button:hover {
  background-color: #3a7bc8;
}

.add-icon {
  margin-right: 8px;
  font-weight: bold;
}

.notes-list {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.empty-state {
  text-align: center;
  color: #888;
  padding: 30px 0;
  font-style: italic;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.note-item {
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.note-item:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.note-link {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  flex-grow: 1;
}

.note-link:hover {
  color: #4a90e2;
}

.note-actions {
  display: flex;
  gap: 8px;
}

.edit-button {
  background-color: #f0f0f0;
  color: #333;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #e0e0e0;
}

.delete-button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #ff5252;
}
</style>