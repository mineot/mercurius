<template>
  <auth-card>
    <template #title>Sign In</template>
    <app-text id="email" label="Email" />
    <app-pswd id="password" label="Password" />
    <div>Conectado</div>
    <template #footer>
      <app-btn label="Sign In" type="primary" />
      <app-btn label="Sign Up" />
    </template>
  </auth-card>
</template>
