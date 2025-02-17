import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  let counter = ref(0);

  function increment() {
    counter.value++;
  }

  return { counter, increment };
});
