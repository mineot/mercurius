<template>
  <auth-card>
    <template #title>Sign In</template>
    <app-text id="email" label="term.email" />
    <app-pswd id="password" label="term.password" />
    <app-checkbox id="remember" label="term.remmember_me" />
    <template #footer>
      <app-flex-column>
        <app-btn label="term.sign_in" type="primary" />
        <app-flex-row>
          <app-btn label="term.sign_up" />
          <app-btn label="term.forgot_password" />
        </app-flex-row>
        <app-btn label="term.back_to_home" type="link" to="/" />
      </app-flex-column>
    </template>
  </auth-card>
</template>
