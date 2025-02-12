import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  let profile = ref(null);

  function setProfile(profile: any) {
    profile = profile;
  }

  return { profile, setProfile };
});
