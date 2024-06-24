<template>
  <div>
    <label :for="props.id" class="form-label">{{ $t(props.label) }}</label>
    <input :id="props.id" type="email" class="form-control form-control-sm" v-model="model" />
    <FormText :message="props.message">
      <template #complement>
        <slot name="complement"></slot>
      </template>
    </FormText>
  </div>
</template>

<script setup lang="ts">
import { InputProps } from "./constants";
import FormText from "./util/FormText.vue";
const props = defineProps<InputProps>();
const model = defineModel();
</script>
