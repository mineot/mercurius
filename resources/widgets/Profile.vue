<template>
  <section class="d-flex gap-2">
    <img class="rounded shadow-sm" :src="profile?.avatar" :alt="profile?.name" />
    <section class="d-flex flex-column gap-0">
      <h1 class="m-0">{{ profile?.name }}</h1>
      <span class="text-body-secondary small subtitle">
        <small>{{ profile?.summary }}</small>
      </span>
    </section>
  </section>
</template>

<script setup lang="ts">
defineProps({ profile: Object });
</script>

<style scoped lang="scss">
img {
  max-width: 80px;
}

.subtitle {
  max-width: 320px;
}
</style>
