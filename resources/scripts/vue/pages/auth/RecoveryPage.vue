<template>
  <auth-card title="term.recovery_password">
    <app-text id="email" label="term.email"></app-text>
    <template #footer>
      <app-flex-grid type="column">
        <app-btn label="term.send_code" type="primary" />
        <app-btn label="term.back_to_home" type="link" to="/" />
      </app-flex-grid>
    </template>
  </auth-card>
</template>
