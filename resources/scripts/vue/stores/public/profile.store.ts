import { API_PUBLIC_PROFILE } from "@store/contracts/profile.contract";
import { Axios, getAxios } from "@store/utils/axios.util";
import { defineStore } from "pinia";
import { detectLanguage } from "@helper/detect-language";
import { Profile } from "@store/contracts/profile.contract";
import { Ref, ref } from "vue";

export const pubProfileStore = defineStore("pub-profile", () => {
  const profile: Ref<Profile> = ref({});

  async function fetchProfile(): Promise<void> {
    const lang: string = detectLanguage();
    const axios: Axios = await getAxios();
    const { data } = await axios.get(API_PUBLIC_PROFILE(lang));
    profile.value = data;
  }

  return { profile, fetchProfile };
});
