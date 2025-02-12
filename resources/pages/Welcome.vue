<template>
  <c-layout>
    <w-brand :profile="profile" />
  </c-layout>
</template>

<script setup lang="ts">
import { useProfileStore } from 'store/profile.store';
defineProps({ profile: Object });

const useProfile = useProfileStore();
console.log(useProfile.profile);
</script>
