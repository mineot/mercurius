<template>
  <app-layout>
    <h1>Home</h1>
    <div v-for="i in 1000" v-bind:key="i">
      {{ `Item: ${i}` }}
    </div>
  </app-layout>
</template>
