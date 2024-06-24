<template>
  <auth-card title="term.change_password">
    <app-pswd-confirm id="password_confirmation"></app-pswd-confirm>
    <template #footer>
      <app-flex-grid type="column">
        <app-btn label="term.change" type="primary"></app-btn>
        <app-btn label="term.back_to_home" type="link" to="/" />
      </app-flex-grid>
    </template>
  </auth-card>
</template>
