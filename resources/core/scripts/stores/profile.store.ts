import { ProfileDTO } from '@script/dtos/profile.dto';
import { Profile } from '@script/models/profile';
import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  let profile: Ref<Profile | null> = ref(null);

  const setProfile = (profileObject: Object, languageObject?: Object) => {
    profile.value = ProfileDTO.to(profileObject, languageObject);
  };

  return { profile, setProfile };
});
