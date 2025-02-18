import { Profile } from '@script/models/profile';

export class ProfileDTO {
  static to(profile: any, language?: any): Profile | null {
    if (!profile) {
      return null;
    }

    const dto: Profile = {
      id: profile.id,
      language: undefined,
      name: profile.name,
      avatar: profile.avatar,
      summary: profile.summary,
    };

    if (language) {
      dto.language = {
        id: language.id,
        name: language.name,
        language: language.language,
        country: language.country,
        profiles: [dto],
      };
    }

    return dto;
  }
}
