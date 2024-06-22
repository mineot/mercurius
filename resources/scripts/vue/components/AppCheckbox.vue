<template>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" :id="props.id" v-model="model" />
    <label class="form-check-label" for="flexCheckDefault">{{ $t(props.label) }}</label>
  </div>
</template>

<script setup lang="ts">
import { Props } from "./constants";
const props = defineProps<Props>();
const model = defineModel();
</script>
