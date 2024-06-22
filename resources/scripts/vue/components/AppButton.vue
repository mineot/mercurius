<template>
  <button type="button" :class="getType" @click="$emit('click')">
    <span>{{ $t(props.label) }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label: string;
  type?: "primary" | "secondary";
}

const props = defineProps<Props>();

const getType = computed(() => `btn btn-sm btn-${props.type || "secondary"}`);
</script>
