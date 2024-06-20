<template>
  <div class="layout public">
    <nav class="topbar">
      <Topbar />
    </nav>
    <nav class="sidebar">
      <Sidebar />
    </nav>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Topbar from "./Topbar.vue";
import Sidebar from "./Sidebar.vue";
</script>
