<template>
  <header>
    <section>
      <figure>
        <img src="https://placehold.co/120" alt="Header Image" />
      </figure>
      <section>
        <h1 class="text-primary">Title</h1>
        <div class="text-secondary text-large">Subtitle</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia magnam sapiente sit id quibusdam
          autem deserunt, rem itaque ab inventore, aperiam enim, odio debitis? Sequi obcaecati suscipit laborum
          adipisci.
        </div>
      </section>
    </section>
    <NavWidget />
  </header>
</template>

<script setup lang="ts">
import NavWidget from "./NavWidget.vue";
</script>
