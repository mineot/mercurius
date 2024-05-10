<template>
  <div class="layout">
    <nav class="topbar">
        <topbar />
    </nav>
    <nav class="sidebar">
        <sidebar/>
    </nav>
    <div class="content">
      <h1>{{ $t("comming_soon") }}</h1>
      <h6>
        <div>{{ $t("comming_soon_message.A") }}</div>
        <div>{{ $t("comming_soon_message.B") }}</div>
        <div>{{ $t("comming_soon_message.C") }}</div>
        <div>{{ $t("comming_soon_message.D") }}</div>
        <div>{{ $t("comming_soon_message.E") }}</div>
      </h6>
    </div>
  </div>
</template>

<script setup lang="ts">
import sidebar from "./components/Sidebar.vue";
import topbar from "./components/Topbar.vue";
</script>
