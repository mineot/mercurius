<template>
  <div>
    <span :class="configuration">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { LabelProps } from "./contracts/constants";

const props = defineProps<LabelProps>();

const configuration = computed(() => {
  const types: string[] = [];

  if (props.fontSize) {
    types.push(`fs-${props.fontSize}`);
  }

  return types.join(" ");
});
</script>
