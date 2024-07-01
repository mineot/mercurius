<template>
  <button class="btn btn-lg btn-secondary py-1 px-4" @click="$emit('click')">
    <i :class="icon"></i>
    <div class="fs-6">
      {{ $t(props.text) }}
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { MenuProps, getIcon } from "@widget/admin/contracts/menu.contract";
const props = defineProps<MenuProps>();
const icon = computed(() => getIcon(props));
</script>
