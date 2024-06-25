<template>
  <public-layout>
    <h1>{{ $t("comming_soon") }}</h1>
    <hr />
    <h3>{{ $t("comming_soon_message.A") }}</h3>
    <p>{{ $t("comming_soon_message.B") }}</p>
    <p>{{ $t("comming_soon_message.C") }}</p>
    <div>{{ $t("comming_soon_message.D") }}</div>
    <div>{{ $t("comming_soon_message.E") }}</div>
  </public-layout>
</template>

<script setup lang="ts">
import { publicProfileStore } from "@store/publicProfileStore";
const profile = publicProfileStore();
profile.fetchPublicProfile();
</script>
