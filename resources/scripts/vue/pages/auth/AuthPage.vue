<template>
  <auth-layout>
    <div class="mb-5 d-flex flex-row gap-4">
      <router-link to="/auth/signin">Sign In</router-link>
      <router-link to="/auth/signup">Sign Up</router-link>
      <router-link to="/auth/recovery">Recovery</router-link>
    </div>
    <router-view></router-view>
  </auth-layout>
</template>
