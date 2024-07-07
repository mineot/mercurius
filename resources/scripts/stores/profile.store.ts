import { defineStore } from "pinia";
import { detectLanguage } from "@helper/detect-language";
import { Get } from "@api";
import { Profile } from "@model/profile.model";
import { PUBLIC_PROFILE } from "@constant/api.endpoints";
import { Ref, ref } from "vue";

export const profileStore = defineStore("profile-store", () => {
  const profile: Ref<Profile> = ref({});

  async function fetchProfile(): Promise<void> {
    const lang: string = detectLanguage();
    profile.value = await Get<Profile>({ url: PUBLIC_PROFILE(lang) });
  }

  return { profile, fetchProfile };
});
