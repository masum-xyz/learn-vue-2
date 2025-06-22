<template>
  <div class="about-container">
    <h1 class="title">Tentang Aplikasi</h1>

    <div class="about-card">
      <section class="about-section">
        <h2>Catatan Harian</h2>
        <p>Aplikasi sederhana untuk menyimpan catatan harian Anda. Dibuat dengan Vue 3 dan Pinia untuk manajemen state yang efisien.</p>
      </section>

      <section class="about-section">
        <h2>Fitur</h2>
        <ul class="feature-list">
          <li>Tambah, edit, dan hapus catatan</li>
          <li>Penyimpanan lokal menggunakan Pinia</li>
          <li>Navigasi antar halaman dengan Vue Router</li>
          <li>Antarmuka yang responsif dan user-friendly</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>Cara Penggunaan</h2>
        <ol class="usage-list">
          <li>Tambahkan catatan baru di halaman utama</li>
          <li>Klik judul catatan untuk melihat detail</li>
          <li>Gunakan tombol Edit untuk mengubah catatan</li>
          <li>Hapus catatan yang tidak diperlukan</li>
        </ol>
      </section>

      <section class="about-section">
        <h2>Teknologi</h2>
        <div class="tech-stack">
          <span class="tech-badge">Vue 3</span>
          <span class="tech-badge">Pinia</span>
          <span class="tech-badge">Vue Router</span>
          <span class="tech-badge">JavaScript</span>
        </div>
      </section>

      <div class="back-section">
        <RouterLink :to="{ name: 'home' }" class="back-button">
          Kembali ke Catatan
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.about-container {
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

.about-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 25px;
}

.about-section {
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.about-section:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

h2 {
  color: #4a90e2;
  font-size: 22px;
  margin-bottom: 15px;
}

p {
  color: #444;
  line-height: 1.6;
  margin-bottom: 15px;
}

.feature-list, .usage-list {
  padding-left: 20px;
  color: #444;
  line-height: 1.8;
}

.feature-list li, .usage-list li {
  margin-bottom: 8px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.tech-badge {
  background-color: #f0f5ff;
  color: #4a90e2;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #d0e1f9;
}

.back-section {
  margin-top: 30px;
  text-align: center;
}

.back-button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #3a7bc8;
}
</style>