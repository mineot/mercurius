import { API_PUBLIC_PROFILE } from "@constant/public.constants";
import { Axios, getAxios } from "@axios";
import { defineStore } from "pinia";
import { detectLanguage } from "@helper/detect-language";
import { Profile } from "@model/profile.model";
import { Ref, ref } from "vue";

export const profileStore = defineStore("profile", () => {
  const profile: Ref<Profile> = ref({});

  async function fetchProfile(): Promise<void> {
    const lang: string = detectLanguage();
    const axios: Axios = await getAxios();
    const { data } = await axios.get(API_PUBLIC_PROFILE(lang));
    profile.value = data;
  }

  return { profile, fetchProfile };
});
