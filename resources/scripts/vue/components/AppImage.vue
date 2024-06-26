<template>
  <img :src="props.image" :alt="props.alt" :class="clazz" :width="size" :height="size" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ImageProps, getSize, getClasses } from "@component/contracts/app-image.contract";
const props = defineProps<ImageProps>();
const size = computed(() => getSize(props));
const clazz = computed(() => getClasses(props));
</script>
