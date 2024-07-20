<template>
  <app-flex-grid type="column">
    <app-password id="password" label="term.password">
      <template #complement>
        <StrongPassword />
      </template>
    </app-password>
    <app-password id="password_confirm" label="term.password_confirmation">
      <template #complement>
        <MatchPassword />
      </template>
    </app-password>
  </app-flex-grid>
</template>

<script setup lang="ts">
import { PasswordConfirmProps } from "./password-confirm.contract";
import StrongPassword from "./utils/StrongPassword.vue";
import MatchPassword from "./utils/MatchPassword.vue";
const props = defineProps<PasswordConfirmProps>();
const model = defineModel();
</script>
