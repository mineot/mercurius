<template>
  <div class="d-flex flex-column gap-0">
    <label :for="getId" class="form-label m-0">
      <span>{{ getLabel }}</span>
    </label>

    <input
      class="form-control w-100"
      :type="getType"
      :id="getId"
      :name="getName"
      :placeholder="getPlaceholder"
      :value="modelValue"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { id, name, type, label, placeholder } = defineProps([
  'id',
  'name',
  'type',
  'label',
  'placeholder',
  'modelValue',
]);

const emit = defineEmits(['update:modelValue']);

const getId = computed(() => {
  return id ?? 'input1';
});

const getName = computed(() => {
  return name ?? 'inputName1';
});

const getType = computed(() => {
  return type ?? 'text';
});

const getLabel = computed(() => {
  return label ?? 'No Label';
});

const getPlaceholder = computed(() => {
  return placeholder ?? '';
});

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
