<template>
  <div class="layout public">
    <nav class="topbar">
      <wpub-topbar />
    </nav>
    <nav class="sidebar">
      <wpub-sidebar />
    </nav>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
