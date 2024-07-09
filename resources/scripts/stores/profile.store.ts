import { defineStore } from "pinia";
import { detectLanguage } from "@helper/detect-language";
import { Get, Response } from "@api";
import { Profile } from "@model/profile.model";
import { PUBLIC_PROFILE } from "@constant/api.endpoints";
import { Ref, ref } from "vue";

export const profileStore = defineStore("profile-store", () => {
  const profile: Ref<Profile> = ref({});

  async function fetchProfile(): Promise<void> {
    const lang: string = detectLanguage();
    const response: Response<Profile> = await Get<Profile>({ url: PUBLIC_PROFILE(lang) });
    profile.value = response.data ?? {};
  }

  return { profile, fetchProfile };
});
