<template>
  <div>
    <label :for="props.id" class="form-label">{{ $t(props.label) }}</label>
    <div class="input-group input-group-sm">
      <input :id="props.id" :type="type" class="form-control" v-model="model" />
      <button class="btn btn-secondary" type="button" @click="setShow()">
        <i :class="icon"></i>
      </button>
    </div>
    <FormText :message="props.message">
      <template #complement>
        <slot name="complement"></slot>
      </template>
    </FormText>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { InputProps } from "./constants";
import FormText from "./util/FormText.vue";

const props = defineProps<InputProps>();
const model = defineModel();
const show = ref(false);
const icon = computed(() => `bi bi-${show.value ? "eye-slash-fill" : "eye-fill"}`);
const type = computed(() => (show.value ? "text" : "password"));
const setShow = () => (show.value = !show.value);
</script>
