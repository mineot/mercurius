<template>
  <HeaderWidget />
  <main>
    <slot></slot>
  </main>
  <FooterWidget />
</template>

<script setup lang="ts">
import HeaderWidget from "./widgets/HeaderWidget.vue";
import FooterWidget from "./widgets/FooterWidget.vue";
</script>
