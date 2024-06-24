<template>
  <app-flex-column>
    <app-pswd id="password" label="term.password">
      <template #complement>
        <StrongPassword />
      </template>
    </app-pswd>
    <app-pswd id="password_confirm" label="term.password_confirmation">
      <template #complement>
        <MatchPassword />
      </template>
    </app-pswd>
  </app-flex-column>
</template>

<script setup lang="ts">
import StrongPassword from "./util/StrongPassword.vue";
import MatchPassword from "./util/MatchPassword.vue";
</script>
