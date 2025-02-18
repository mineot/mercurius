<template>
  <div class="d-flex flex-column gap-1">
    <img class="img-fluid img-thumbnail" :src="profile?.avatar" :alt="profile?.name" />
    <div>
      <strong class="fs-4">{{ profile?.name }}</strong>
    </div>
    <div>
      <small>{{ profile?.summary }}</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProfileStore } from '@store/profile.store';
const { profile } = useProfileStore();
</script>

<style scoped lang="scss">
img {
  max-width: 224px;
}
</style>
