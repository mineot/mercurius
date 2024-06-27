<template>
  <app-flex-grid gap="5">
    <app-flex-grid type="column" gap="2">
      <app-label :text="store.profile.name" fontSize="xxl" fontWeight="bold" />
      <app-label :text="store.profile.job_title" fontSize="md" fontWeight="italic" />
      <app-label :text="store.profile.description" fontSize="xs" />
    </app-flex-grid>
    <app-img :image="store.profile.image_card" :alt="store.profile.name" size="280" />
  </app-flex-grid>
</template>

<script setup lang="ts">
import { pubProfileStore } from "@store/public/profile.store";
const store = pubProfileStore();
</script>
