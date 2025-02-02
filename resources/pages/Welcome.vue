<template>
  <c-layout>
    <w-person :profile="profile" />
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
defineProps({ profile: Object });
</script>
