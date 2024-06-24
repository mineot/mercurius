<template>
  <auth-card title="term.sign_up">
    <app-flex-column>
      <app-text id="email" label="term.email" />
      <app-pswd-confirm id="password_confirmation" />
      <app-checkbox id="remember" label="term.remmember_me" />
    </app-flex-column>
    <template #footer>
      <app-flex-column>
        <app-btn label="term.sign_up" type="primary" />
        <app-flex-row>
          <app-btn label="term.sign_in" />
          <app-btn label="term.forgot_password" />
        </app-flex-row>
        <app-btn label="term.back_to_home" type="link" to="/" />
      </app-flex-column>
    </template>
  </auth-card>
</template>
