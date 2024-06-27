<template>
  <app-flex-grid type="column" gap="2" mb="3">
    <app-label :text="store.profile.name" fontSize="lg" fontWeight="bold" center />
    <app-img :image="store.profile.photo" :alt="store.profile.name" size="140" thumbnail center />
    <app-label :text="store.profile.summary" fontSize="xs" center />
  </app-flex-grid>
</template>

<script setup lang="ts">
import { pubProfileStore } from "@store/public/profile.store";
const store = pubProfileStore();
</script>
