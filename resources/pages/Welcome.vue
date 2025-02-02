<template>
  <c-layout>
    <div>
      <img :src="profile?.avatar" :alt="profile?.name" />
    </div>
    <span>{{ profile?.name }}</span>
    <div>
      <span>{{ profile?.summary }}</span>
    </div>
    <div>
      <span>{{ profile?.job_title }}</span>
    </div>
    <div>
      <img :src="profile?.job_avatar" :alt="profile?.job_title" />
    </div>
    <div>
      <span>{{ profile?.job_description }}</span>
    </div>
  </c-layout>
</template>

<script setup lang="ts">
const props = defineProps({
  profile: Object,
});
</script>
