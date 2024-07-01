<template>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" :id="props.id" v-model="model" />
      <label class="form-check-label" :for="props.id">{{ $t(props.label) }}</label>
    </div>
    <FormText :message="props.message">
      <template #complement>
        <slot name="complement"></slot>
      </template>
    </FormText>
  </div>
</template>

<script setup lang="ts">
import { InputProps } from "@component/contracts/app-input.contract";
import FormText from "./util/FormText.vue";
const props = defineProps<InputProps>();
const model = defineModel();
</script>
