<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
  <i class="bi bi-house"></i>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>
