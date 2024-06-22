<template>
  <auth-card>
    <template #title>Sign In</template>
    <textfield id="email" label="Email" />
    <pswdfield id="password" label="Password" />
    <div>Conectado</div>
    <template #footer>
      <btn label="Sign In" type="primary" />
      <btn label="Sign Up" />
    </template>
  </auth-card>
</template>
