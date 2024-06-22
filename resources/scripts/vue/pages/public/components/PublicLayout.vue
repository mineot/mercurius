<template>
  <div class="layout public">
    <nav class="topbar">
      <public-topbar />
    </nav>
    <nav class="sidebar">
      <public-sidebar />
    </nav>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
