<template>
  <div class="d-flex gap-1 align-items-center" :title="profile?.summary">
    <img class="img-fluid img-thumbnail" :src="profile?.avatar" :alt="profile?.name" />
    <div>
      <strong class="fs-3">{{ profile?.name }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProfileStore } from '@store/profile.store';
const { profile } = useProfileStore();
</script>

<style scoped lang="scss">
img {
  max-width: 50px;
}
</style>
