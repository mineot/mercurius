<template>
  <div class="form-text">
    <span v-if="props.message" :class="clazz">{{ $t(props.message) }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { InputMessageProps, getInputMessageClass } from "./contracts";
const props = defineProps<InputMessageProps>();
const clazz = computed(() => getInputMessageClass(props));
</script>
