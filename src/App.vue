<template>
  <div class="layout">
    <div class="header">
      <h2 class="title">Header</h2>
      <div class="separator"></div>
      <div class="items">
        <router-link class="item" to="/">
          <i class="icon-home hover"></i>
        </router-link>
        <router-link class="item" to="/about">
          <i class="icon-help hover"></i>
        </router-link>
      </div>
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>
