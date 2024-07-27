<template>
  <app-input
    :id="props.id"
    :label="props.label"
    :type="type"
    :message="props.message"
    :messageType="props.messageType"
    v-model="model"
  >
    <template v-slot:btn>
      <button class="btn btn-secondary" type="button" @click="setShow()">
        <i :class="icon"></i>
      </button>
    </template>
  </app-input>
</template>

<script setup lang="ts">
import { ref, computed, Ref } from "vue";
import { Props, passwordIcon, passwordType } from "./controller";
const props = defineProps<Props>();
const model = defineModel();
const show: Ref<boolean> = ref(false);
const icon = computed(() => passwordIcon(show));
const type = computed(() => passwordType(show));
const setShow = () => (show.value = !show.value);
</script>
