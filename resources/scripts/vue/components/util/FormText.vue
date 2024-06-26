<template>
  <div class="form-text">
    <span v-if="props.message">{{ $t(props.message) }}</span>
    <slot name="complement"></slot>
  </div>
</template>

<script setup lang="ts">
import { FormTextProps } from "@component/contracts/app-input.contract";
const props = defineProps<FormTextProps>();
</script>
