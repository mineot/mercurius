<template>
  <app-layout>
    <template v-slot:header>
      <wapp-brand></wapp-brand>
      <!-- <wapp-brand :profile="profile" /> -->
    </template>
    <h1>Welcome</h1>
  </app-layout>
</template>

<script setup lang="ts">
// import { useProfileStore } from '@store/profile.store';
// defineProps({ profile: Object });

// const useProfile = useProfileStore();
// console.log(useProfile.profile);
</script>
