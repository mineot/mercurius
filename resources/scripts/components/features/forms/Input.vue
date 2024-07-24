<template>
  <div class="mb-3">
    <label :for="props.id" class="form-label">{{ $t(props.label) }}</label>
    <div class="input-group input-group-sm">
      <span v-if="$slots.prefix" class="input-group-text">
        <slot name="prefix"></slot>
      </span>
      <input :id="props.id" :type="type" class="form-control form-control-sm" v-model="model" />
      <span v-if="$slots.suffix" class="input-group-text">
        <slot name="suffix"></slot>
      </span>
      <slot name="btn"></slot>
    </div>
    <app-input-message :message="props.message" :messageType="props.messageType" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { InputProps, getInputType } from "./contracts";

const props = defineProps<InputProps>();
const model = defineModel();
const type = computed(() => getInputType(props));
</script>
