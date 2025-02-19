<template>
  <app-layout>
    <template #aside>
      <span class="fs-2 fw-bold">Admin</span>
      <button type="button" class="btn btn-sm btn-secondary" @click="exit">
        <span>Sign Out</span>
      </button>
    </template>
    <span>Admin</span>
  </app-layout>
</template>

<script setup lang="ts">
import { router } from '@inertiajs/vue3';

const exit = () => {
  router.post('auth/signout');
};
</script>
