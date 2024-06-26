<template>
  <div :class="type">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FlexProps, getType } from "@component/contracts/app-flex-grid.contract";
const props = defineProps<FlexProps>();
const type = computed(() => getType(props));
</script>
