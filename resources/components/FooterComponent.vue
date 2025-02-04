<template>
  <footer :class="style">
    <small class="text-body-secondary">
      &copy; {{ year }} {{ owner }}, {{ $t('all_rights_reserved') }}
    </small>
    <a href="#" class="btn btn-sm btn-link">Contact Me</a>
  </footer>
</template>

<script setup lang="ts">
const style = [
  'bg-body-tertiary',
  'p-2',
  'd-flex',
  'flex-wrap',
  'justify-content-md-between',
  'justify-content-sm-between',
  'justify-content-around',
  'align-items-center',
];

const owner = (import.meta as any).env.VITE_APP_OWNER;
const year = (import.meta as any).env.VITE_APP_YEAR;
</script>
