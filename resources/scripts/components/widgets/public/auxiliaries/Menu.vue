<template>
  <div class="border p-2 mb-2">
    <div>
      <router-link :to="PATHS.PUBLIC.HOME.TO">
        {{ PATHS.PUBLIC.HOME.NAME }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PATHS } from "@scripts/pages/routes";
</script>
