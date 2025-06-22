// src/components/ConfirmationDialog.vue
<template>
  <div class="overlay">
    <div class="dialog">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <div class="dialog-actions">
        <button @click="$emit('cancel')" class="cancel-button">Batal</button>
        <button @click="$emit('confirm')" class="confirm-button">{{ confirmButtonText }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Konfirmasi"
  },
  message: {
    type: String,
    default: "Apakah anda yakin?"
  },
  confirmButtonText: {
    type: String,
    default: "Ya"
  }
});

defineEmits(['confirm', 'cancel']);
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.dialog {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.dialog h3 {
  margin-top: 0;
  color: #333;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.cancel-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
}

.confirm-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #ff6b6b;
  color: white;
  cursor: pointer;
}
</style>