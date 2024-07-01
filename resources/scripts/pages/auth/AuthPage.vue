<template>
  <div class="m-5 d-flex flex-row gap-4">
    <router-link to="/auth/signin">Sign In</router-link>
    <router-link to="/auth/signup">Sign Up</router-link>
    <router-link to="/auth/recovery">Recovery</router-link>
    <router-link to="/auth/change_password">Change Password</router-link>
    <router-link to="/auth/code_validator">Code Validator</router-link>
  </div>
  <layout-auth>
    <router-view></router-view>
  </layout-auth>
</template>
