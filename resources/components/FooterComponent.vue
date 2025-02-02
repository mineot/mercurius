<template>
  <footer class="bg-dark darken-1 p-sm d-flex space-between align-center">
    <small class="text-info lighten-3">
      &copy; {{ year }} {{ owner }}, {{ $t('all_rights_reserved') }}
    </small>
    <small>Contact Me</small>
  </footer>
</template>

<script setup lang="ts">
const owner = (import.meta as any).env.VITE_APP_OWNER;
const year = (import.meta as any).env.VITE_APP_YEAR;
</script>
