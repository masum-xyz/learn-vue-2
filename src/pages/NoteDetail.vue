<script setup>
    import { useRoute, useRouter } from 'vue-router'
    import { useNoteStore } from '../stores/noteStore'
    import ConfirmationDialog from "../components/ConfirmationDialog.vue";
    import { ref } from 'vue'

    const route = useRoute()
    const router = useRouter()
    const store = useNoteStore()

    const noteId = Number(route.params.id)
    const note = store.notes.find(n => n.id === noteId)
    const showDeleteDialog = ref(false)

    function goBack() {
      router.push({ name: 'home' })
    }

    function confirmDelete() {
      store.hapusNote(note.id)
      goBack();
      showDeleteDialog.value = false;
    }
    function showConfirmation() {
      showDeleteDialog.value = true;
    }
    </script>

    <template>
      <div class="note-detail-container">
        <div v-if="note" class="note-card">
          <div class="note-header">
            <button @click="goBack" class="back-button">
              &larr; Kembali
            </button>
            <div class="note-id">Catatan #{{ note.id }}</div>
          </div>

          <h1 class="note-title">{{ note.title }}</h1>

          <div class="note-content">
            {{ note.content }}
          </div>

          <div class="note-actions">
            <RouterLink :to="{ name: 'note-edit', params: { id: note.id }}" class="edit-button">
              Edit Catatan
            </RouterLink>
            <button @click="showConfirmation" class="delete-button">
              Hapus Catatan
            </button>
          </div>
        </div>

        <div v-else class="not-found">
          <h2>Catatan tidak ditemukan</h2>
          <p>Catatan yang Anda cari tidak ada atau telah dihapus.</p>
          <button @click="goBack" class="back-button">
            Kembali ke Beranda
          </button>
        </div>

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
    .note-detail-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .note-card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 25px;
    }

    .note-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .back-button {
      background-color: #f5f5f5;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      color: #333;
      transition: background-color 0.3s ease;
    }

    .back-button:hover {
      background-color: #e0e0e0;
    }

    .note-id {
      color: #888;
      font-size: 14px;
    }

    .note-title {
      font-size: 28px;
      color: #333;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #eee;
    }

    .note-content {
      font-size: 16px;
      line-height: 1.6;
      color: #444;
      margin-bottom: 30px;
      white-space: pre-wrap;
    }

    .note-actions {
      display: flex;
      gap: 15px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }

    .edit-button {
      background-color: #4a90e2;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      text-decoration: none;
      font-size: 16px;
      display: inline-block;
      text-align: center;
      transition: background-color 0.3s ease;
    }

    .edit-button:hover {
      background-color: #3a7bc8;
    }

    .delete-button {
      background-color: #ff6b6b;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }

    .delete-button:hover {
      background-color: #ff5252;
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
    </style>