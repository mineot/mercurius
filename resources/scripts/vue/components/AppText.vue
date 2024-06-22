<template>
  <div class="mb-2">
    <label :for="props.id" class="form-label">{{ $t(props.label) }}</label>
    <input :id="props.id" type="text" class="form-control form-control-sm" v-model="model" />
  </div>
</template>

<script setup lang="ts">
import { Props } from "./constants";
const props = defineProps<Props>();
const model = defineModel();
</script>
