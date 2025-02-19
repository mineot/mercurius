<template>
  <h1>Admin</h1>
  <button type="button" class="btn btn-secondary" @click="exit">
    <span>Sign Out</span>
  </button>
</template>

<script setup lang="ts">
import { router } from '@inertiajs/vue3';

const exit = () => {
  router.post('auth/signout');
};
</script>
