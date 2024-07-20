<template>
  <div :class="centered">
    <span v-if="props.translate" :class="clazz">{{ $t(props.text || "") }}</span>
    <span v-else :class="clazz">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { LabelProps, getClasses, getCentered } from "./label.contract";
const props = defineProps<LabelProps>();
const clazz = computed(() => getClasses(props));
const centered = computed(() => getCentered(props));
</script>
