<template>
  <section role="profile-widget">
    <div class="name">{{ profile?.name }}</div>
    <img class="photo" :src="profile?.photo" :alt="profile?.name" />
    <small class="summary">{{ profile?.summary }}</small>
  </section>
</template>

<script setup lang="ts">
import { fetchProfile, type Profile } from '@src/core/docs/profile';
import { ref } from 'vue';

const profile = ref<Profile>();

fetchProfile().then((result) => {
  profile.value = result;
});
</script>
