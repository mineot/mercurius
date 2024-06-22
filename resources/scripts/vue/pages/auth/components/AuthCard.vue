<template>
  <div class="mb-3">
    <h4 class="text-center mb-3">
      <slot name="title"></slot>
    </h4>
    <slot></slot>
    <div class="mt-3">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
