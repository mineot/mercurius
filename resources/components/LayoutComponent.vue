<template>
  <header>Header</header>
  <nav>Navigation</nav>
  <main>
    <br />
    <div ref="container"></div>
    <br />
  </main>
  <footer>Footer</footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const colors = [
  'dark',
  'light',
  'primary',
  'secondary',
  'accent',
  'success',
  'info',
  'warning',
  'danger',
];

const container = ref(null);

onMounted(() => {
  if (container.value) {
    const dom = container.value as any;

    const create = (element: string, prop: string, color: string) => {
      const el = document.createElement(element);
      el.classList.add(`${prop}-${color}`);
      el.innerText = `${prop}-${color}`;
      el.style.marginBottom = '10px';
      dom.appendChild(el);
    };

    const hr = (color: string) => {
      const el = document.createElement('hr');
      el.classList.add(color);
      el.style.marginBottom = '10px';
      dom.appendChild(el);
    };

    colors.forEach((color) => create('div', 'bg', color));
    colors.forEach((color) => create('div', 'text', color));
    colors.forEach((color) => create('div', 'border', color));
    colors.forEach((color) => hr(color));
  }
});
</script>
