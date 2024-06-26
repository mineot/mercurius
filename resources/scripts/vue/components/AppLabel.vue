<template>
  <div>
    <span :class="clazz">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { LabelProps, getClasses } from "@component/contracts/app-label.contract";
const props = defineProps<LabelProps>();
const clazz = computed(() => getClasses(props));
</script>
