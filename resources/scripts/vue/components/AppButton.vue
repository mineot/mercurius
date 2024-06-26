<template>
  <router-link v-if="props.to" :class="type" :to="props.to">
    <span>{{ $t(props.label) }}</span>
  </router-link>
  <button v-else type="button" :class="type" @click="$emit('click')">
    <span>{{ $t(props.label) }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ButtonProps, getType } from "@component/contracts/app-button.contract";
const props = defineProps<ButtonProps>();
const type = computed(() => getType(props.type));
</script>
