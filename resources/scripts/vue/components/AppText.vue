<template>
  <div>
    <label :for="props.id" class="form-label">{{ $t(props.label) }}</label>
    <input :id="props.id" type="text" class="form-control form-control-sm" v-model="model" />
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
