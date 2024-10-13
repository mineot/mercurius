<template>
  <section role="layout">
    <header>
      <router-link class="button" to="/">
        <i class="icon-home"></i>
        <span>Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <i class="icon-help"></i>
        <span>About</span>
      </router-link>
    </header>
    <section>
      <router-view />
    </section>
  </section>
</template>
