<template>
  <div>
    <img
      :src="profile.publicProfile.photo"
      :alt="profile.publicProfile.name"
      class="img-thumbnail"
    />
  </div>
  <div>{{ profile.publicProfile.name }}</div>
  <div>{{ profile.publicProfile.job_title }}</div>
  <div>{{ profile.publicProfile.summary }}</div>
</template>

<script setup lang="ts">
import { publicProfileStore } from "@store/publicProfileStore";
const profile = publicProfileStore();
</script>
