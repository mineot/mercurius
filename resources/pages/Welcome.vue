<template>
  <c-layout>
    <w-brand :profile="profile" />
  </c-layout>
</template>

<script setup lang="ts">
defineProps({ profile: Object });
</script>
