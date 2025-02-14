<template>
  <footer :class="style">
    <span class="text-body-secondary small">
      <span class="small">
        <small>&copy; {{ year }} {{ owner }}, {{ $t('all_rights_reserved') }}</small>
      </span>
    </span>
    <a href="/contact" class="btn btn-sm btn-link">
      <span>{{ $t('contact_me') }}</span>
    </a>
  </footer>
</template>

<script setup lang="ts">
const style = [
  'bg-body-tertiary',
  'p-1',
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
