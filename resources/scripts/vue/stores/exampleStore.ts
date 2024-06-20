import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const exampleStore = defineStore("example", () => {
  const name = ref("");

  const devName = computed(() => `Example name: ${name.value}`);

  function setName(nm: string) {
    name.value = nm;
  }

  return { devName, name, setName };
});
