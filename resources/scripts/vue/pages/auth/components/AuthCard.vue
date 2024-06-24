<template>
  <div class="card">
    <h4>{{ $t(props.title) }}</h4>
    <slot></slot>
    <div id="divFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>
