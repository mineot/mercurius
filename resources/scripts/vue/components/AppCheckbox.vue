<template>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" :id="props.id" v-model="model" />
      <label class="form-check-label" for="flexCheckDefault">{{ $t(props.label) }}</label>
    </div>
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
