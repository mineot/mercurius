<template>
  <button class="btn btn-lg btn-secondary py-1 px-4" @click="$emit('click')">
    <i :class="icon"></i>
    <div class="fs-6">
      {{ $t(props.text) }}
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{ icon: string; text: string }>();
const icon = computed(() => `bi bi-${props.icon} fs-1`);
</script>
