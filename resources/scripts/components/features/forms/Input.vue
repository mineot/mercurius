<template>
  <div class="mb-3">
    <label :for="props.id" class="form-label">
        {{ $t(props.label) }}
    </label>
    <div class="input-group input-group-sm">
      <span v-if="$slots.prefix" class="input-group-text">
        <slot name="prefix"></slot>
      </span>
      <input
        :id="props.id"
        :type="computedInputType"
        class="form-control form-control-sm"
        v-model="model"
      />
      <span v-if="$slots.suffix" class="input-group-text">
        <slot name="suffix"></slot>
      </span>
      <span v-if="$slots.btn">
        <slot name="btn"></slot>
      </span>
    </div>
    <div class="form-text">
      <span v-if="props.message" :class="computedFormTextClass">
        {{ $t(props.message) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { inputType, formTextClass, Props } from "./controller";
const model = defineModel();
const props = defineProps<Props>();
const computedInputType = computed(() => inputType(props));
const computedFormTextClass = computed(() => formTextClass(props));
</script>
