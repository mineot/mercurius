<template>
  <section class="app-layout">
    <header>
      <slot name="header"></slot>
    </header>
    <aside>
      <slot name="aside"></slot>
    </aside>
    <main>
      <slot></slot>
    </main>
  </section>
</template>
