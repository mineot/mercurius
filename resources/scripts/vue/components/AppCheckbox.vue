<template>
  <div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" :id="props.id" v-model="model" />
      <label class="form-check-label" for="flexCheckDefault">{{ $t(props.label) }}</label>
    </div>
    <ExtraUtil :message="props.message">
      <template #complement>
        <slot name="complement"></slot>
      </template>
    </ExtraUtil>
  </div>
</template>

<script setup lang="ts">
import { Props } from "./constants";
import ExtraUtil from "./util/ExtraUtil.vue";

const props = defineProps<Props>();
const model = defineModel();
</script>
