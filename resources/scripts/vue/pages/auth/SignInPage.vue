<template>
  <auth-card title="term.sign_in">
    <app-flex-grid type="column">
      <app-email id="email" label="term.email" />
      <app-pswd id="password" label="term.password" />
      <app-checkbox id="remember" label="term.remmember_me" />
    </app-flex-grid>
    <template #footer>
      <app-flex-grid type="column">
        <app-btn label="term.sign_in" type="primary" />
        <app-flex-grid>
          <app-btn label="term.sign_up" />
          <app-btn label="term.forgot_password" />
        </app-flex-grid>
        <app-btn label="term.back_to_home" type="link" to="/" />
      </app-flex-grid>
    </template>
  </auth-card>
</template>
