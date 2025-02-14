<template>
  <footer :class="style">
    <small class="text-body-secondary">
      &copy; {{ year }} {{ owner }}, {{ $t('all_rights_reserved') }}
    </small>
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
  'flex-column',
  'flex-md-row',
  'flex-sm-row',
  'flex-nowrap',
  'justify-content-between',
  'align-items-center',
];

const owner = (import.meta as any).env.VITE_APP_OWNER;
const year = (import.meta as any).env.VITE_APP_YEAR;
</script>
