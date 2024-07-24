<template>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" :id="props.id" v-model="model" />
      <label class="form-check-label" :for="props.id">{{ $t(props.label) }}</label>
    </div>
    <app-input-message :message="props.message" :messageType="props.messageType" />
  </div>
</template>

<script setup lang="ts">
import { CheckboxProps } from "./contracts";
const props = defineProps<CheckboxProps>();
const model = defineModel();
</script>
