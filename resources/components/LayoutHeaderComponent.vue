<template>
  <header :class="style">
    <div>{{ $t('header') }}</div>
    <app-layout-nav />
  </header>
</template>

<script setup lang="ts">
const style = [
  'bg-body-tertiary',
  'p-2',
  'd-flex',
  'flex-nowrap',
  'justify-content-between',
  'align-items-center',
];
</script>
