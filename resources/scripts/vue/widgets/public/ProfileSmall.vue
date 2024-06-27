<template>
  <app-flex-grid type="column" gap="2" mb="3">
    <app-label :text="store.publicProfile.name" fontSize="lg" fontWeight="bold" center />
    <app-img
      :image="store.publicProfile.photo"
      :alt="store.publicProfile.name"
      size="140"
      thumbnail
      center
    />
    <app-label :text="store.publicProfile.summary" fontSize="xs" center />
  </app-flex-grid>
</template>

<script setup lang="ts">
import { PublicProfile, publicProfileStore } from "@store/publicProfileStore";
const store = publicProfileStore();
</script>
