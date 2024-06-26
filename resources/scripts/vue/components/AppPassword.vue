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
import { ref, computed, Ref } from "vue";
import { PasswordProps, getIcon, getType } from "@component/contracts/app-password.contract";
import FormText from "./util/FormText.vue";
const props = defineProps<PasswordProps>();
const model = defineModel();
const show: Ref<boolean> = ref(false);
const icon = computed(() => getIcon(show));
const type = computed(() => getType(show));
const setShow = () => (show.value = !show.value);
</script>
