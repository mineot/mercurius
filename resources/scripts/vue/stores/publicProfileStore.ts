import { defineStore } from "pinia";
import { Ref, ref, getCurrentInstance } from "vue";
import { detectLanguage } from "@helper/detect-language";

export const publicProfileStore = defineStore("public_profile", () => {
  const publicProfile: Ref<PublicProfile> = ref({});

  async function fetchPublicProfile(): Promise<void> {
    const lang: string = detectLanguage();
    const instance = getCurrentInstance();

    if (instance) {
      const axios = instance.appContext.config.globalProperties.$axios;
      const { data } = await axios.get(`/api/public/profile/${lang}`);
      publicProfile.value = data;
    }
  }

  return { publicProfile, fetchPublicProfile };
});

export interface PublicProfile {
  id?: string;
  name?: string;
  job_title?: string;
  summary?: string;
  description?: string;
  photo?: string;
  image_card?: string;
  language?: string;
}
