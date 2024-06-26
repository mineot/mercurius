<template>
  <div>
    <span class="fs-1 fw-bold">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { LabelProps } from "./constants";
const props = defineProps<LabelProps>();
</script>
