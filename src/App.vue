<template>
  <div class="layout">
    <div class="header">
      <router-link to="/">
        <i class="icon-home"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/about">
        <i class="icon-help"></i>
        <span>About</span>
      </router-link>
    </div>
    <div class="sidebar">
      <router-link to="/">
        <i class="icon-home"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/about">
        <i class="icon-help"></i>
        <span>About</span>
      </router-link>
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>
