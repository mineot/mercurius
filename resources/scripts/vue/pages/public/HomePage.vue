<template>
  <layout-public>
    <wpub-profile-lg />
    <!-- <h1>{{ $t("comming_soon") }}</h1>
    <hr />
    <h3>{{ $t("comming_soon_message.A") }}</h3>
    <p>{{ $t("comming_soon_message.B") }}</p>
    <p>{{ $t("comming_soon_message.C") }}</p>
    <div>{{ $t("comming_soon_message.D") }}</div>
    <div>{{ $t("comming_soon_message.E") }}</div> -->
  </layout-public>
</template>

<script setup lang="ts">
import { pubProfileStore } from "@store/public/profile.store";
const profile = pubProfileStore();
profile.fetchProfile();
</script>
