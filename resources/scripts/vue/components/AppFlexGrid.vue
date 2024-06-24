<template>
  <div :class="type">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FlexProps } from "./constants";
const props = defineProps<FlexProps>();
const type = computed(() => `d-flex flex-${props.type || "row"} gap-3`);
</script>
