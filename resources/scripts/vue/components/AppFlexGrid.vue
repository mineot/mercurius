<template>
  <div :class="type">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FlexProps } from "./constants";

const props = defineProps<FlexProps>();

const type = computed(() => {
  const types = [];
  types.push(props.inline ? "d-inline-flex" : "d-flex");
  types.push(`flex-${props.type || "row"}`);
  if (props.wrap) {
    types.push(`flex-wrap`);
  }
  types.push(`gap-3`);
  return types.join(" ");
});
</script>
