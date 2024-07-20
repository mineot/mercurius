<template>
  <div class="form-text">
    <span v-if="props.message" :class="clazz">{{ $t(props.message) }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { FormTextProps, getFormTextClass } from "./form-text";
const props = defineProps<FormTextProps>();
const clazz = computed(() => getFormTextClass(props));
</script>
