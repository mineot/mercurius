<template>
  <section role="layout">
    <header>
      <app-profile-widget />
      <router-link class="button" to="/">
        <i class="icon-home"></i>
        <span>{{ $t('home') }}</span>
      </router-link>
      <router-link class="button" to="/about">
        <i class="icon-help"></i>
        <span>{{ $t('about') }}</span>
      </router-link>
    </header>
    <section>
      <router-view />
    </section>
  </section>
</template>
