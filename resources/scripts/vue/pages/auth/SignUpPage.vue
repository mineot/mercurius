<template>
  <auth-card title="term.sign_up">
    <app-flex-grid type="column">
      <app-text id="email" label="term.email" />
      <app-pswd-confirm id="password_confirmation" />
      <app-checkbox id="remember" label="term.remmember_me" />
    </app-flex-grid>
    <template #footer>
      <app-flex-grid type="column">
        <app-btn label="term.sign_up" type="primary" />
        <app-flex-grid type="row">
          <app-btn label="term.sign_in" />
          <app-btn label="term.forgot_password" />
        </app-flex-grid>
        <app-btn label="term.back_to_home" type="link" to="/" />
      </app-flex-grid>
    </template>
  </auth-card>
</template>
