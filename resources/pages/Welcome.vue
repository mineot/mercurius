<template>
  <app-layout>
    <template v-slot:header>
      <wapp-profile :profile="profile" />
    </template>
    <h1>Welcome</h1>
  </app-layout>
</template>

<script setup lang="ts">
defineProps({ profile: Object });
</script>
