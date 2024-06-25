<template>
  <app-img
    :image="profile.publicProfile.photo"
    :alt="profile.publicProfile.name"
    size="120"
    thumbnail
  />
  <div>{{ profile.publicProfile.name }}</div>
  <div>{{ profile.publicProfile.job_title }}</div>
  <div>{{ profile.publicProfile.summary }}</div>
</template>

<script setup lang="ts">
import { publicProfileStore } from "@store/publicProfileStore";
const profile = publicProfileStore();
</script>
