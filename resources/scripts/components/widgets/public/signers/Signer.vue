<template>
  <div class="border p-2">
    <div>
      <router-link :to="PATHS.AUTH.SIGNIN.TO">
        <span>{{ PATHS.AUTH.SIGNIN.NAME }}</span>
      </router-link>
    </div>
    <div>
      <router-link :to="PATHS.AUTH.SIGNUP.TO">
        <span>{{ PATHS.AUTH.SIGNUP.NAME }}</span>
      </router-link>
    </div>
    <hr />
    <div>
      <router-link :to="PATHS.ADMIN.HOME.TO">
        <span>{{ PATHS.ADMIN.HOME.NAME }}</span>
      </router-link>
    </div>
    <div>
      <span>SIGN OUT</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PATHS } from "@scripts/pages/routes";
</script>
