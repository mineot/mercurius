<template>
  <div v-if="props.message" class="form-text">{{ $t(props.message) }}</div>
  <slot name="complement"></slot>
</template>

<script setup lang="ts">
import { ExtraProps } from "../constants";
const props = defineProps<ExtraProps>();
</script>
