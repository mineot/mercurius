<template>
  <div>
    <label :for="props.id" class="form-label">{{ $t(props.label) }}</label>
    <input :id="props.id" type="text" class="form-control form-control-sm" v-model="model" />
    <FormText :message="props.message">
      <template #complement>
        <slot name="complement"></slot>
      </template>
    </FormText>
  </div>
</template>

<script setup lang="ts">
import { Props } from "./constants";
import FormText from "./util/FormText.vue";

const props = defineProps<Props>();
const model = defineModel();
</script>
