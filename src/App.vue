<template>
  <div class="app-container">
    <nav class="main-nav">
      <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }" class="nav-link">About</RouterLink>
    </nav>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.main-nav {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  margin: 0 5px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #e0e0e0;
}

.router-link-active {
  background-color: #4a90e2;
  color: white;
}

.content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>