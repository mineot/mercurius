<template>
  <div class="layout">
    <div class="header">
      <router-link class="button" to="/">
        <i class="icon-home"></i>
        <span>Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <i class="icon-help"></i>
        <span>About</span>
      </router-link>
      <div class="separator"></div>
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>
