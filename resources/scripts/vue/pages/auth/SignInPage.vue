<template>
  <auth-card>
    <template #title>Sign In</template>
    <app-text id="email" label="Email" />
    <app-pswd id="password" label="Password" />
    <app-checkbox id="remember" label="Keep me connected!" />
    <template #footer>
      <app-flex-column>
        <app-btn label="Sign In" type="primary" />
        <app-flex-row>
          <app-btn label="Sign Up" />
          <app-btn label="Forgot password?" />
        </app-flex-row>
        <app-btn label="Back to home page" type="link" to="/" />
      </app-flex-column>
    </template>
  </auth-card>
</template>
