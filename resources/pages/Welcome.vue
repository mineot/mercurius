<template>
  <app-layout>
    <template #header>
      <wapp-profile-small></wapp-profile-small>
    </template>

    <template #aside>
      <wapp-profile-large></wapp-profile-large>
    </template>

    <h1>Welcome</h1>
  </app-layout>
</template>

<script setup lang="ts">
import { useProfileStore } from '@store/profile.store';

const { profile, language } = defineProps(['profile', 'language']);
const store = useProfileStore();
store.setProfile(profile, language);
</script>
