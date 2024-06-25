<template>
  <img :src="props.image" :alt="props.alt" :class="getClass" :width="getSize" :height="getSize" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ImageProps } from "./constants";

const props = defineProps<ImageProps>();

const getSize = computed(() => (props.size ? props.size : ""));

const getClass = computed(() => {
  const arr = [];

  if (props.thumbnail) {
    arr.push("img-thumbnail");
  }

  if (props.responsive) {
    arr.push("img-fluid");
  }

  return arr.join(" ");
});
</script>
