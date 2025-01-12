<template>
  <i :class="type"></i>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  type?: "contact";
}>();

const type = computed(() => {
  const icons = ["bi"];

  switch (props.type) {
    case "contact":
      icons.push("bi-envelope-at-fill");
      break;
    default:
      break;
  }

  return icons.join(" ");
});
</script>
