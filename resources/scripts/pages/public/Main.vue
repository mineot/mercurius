<template>
  <!-- <layout-public>
    <wpub-profile-lg />
    <hr />
    <app-flex-grid gap="1" type="column">
      <app-label text="comming_soon" fontSize="lg" fontWeight="bold" translate />
      <app-label text="comming_soon_message.A" translate />
      <app-label text="comming_soon_message.B" translate />
      <app-label text="comming_soon_message.C" translate />
      <app-label text="comming_soon_message.D" translate />
      <app-label text="comming_soon_message.E" translate />
    </app-flex-grid>
  </layout-public> -->
</template>

<script setup lang="ts">
import { profileStore } from "@stores/profile.store";
const store = profileStore();
store.fetchProfile();
</script>
