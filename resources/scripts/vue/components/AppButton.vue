<template>
  <router-link v-if="props.to" :class="getType" :to="props.to">
    <span>{{ $t(props.label) }}</span>
  </router-link>
  <button v-else type="button" :class="getType" @click="$emit('click')">
    <span>{{ $t(props.label) }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ButtonProps } from "./constants";
const props = defineProps<ButtonProps>();
const getType = computed(() => `btn btn-sm btn-${props.type || "secondary"}`);
</script>
