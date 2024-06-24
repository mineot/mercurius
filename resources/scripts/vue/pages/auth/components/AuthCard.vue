<template>
  <div class="card">
    <h4>
      <slot name="title"></slot>
    </h4>
    <slot></slot>
    <div id="divFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
