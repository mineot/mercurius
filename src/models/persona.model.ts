interface Profession {
  name: string;
  summary: string;
  photo: string;
}

export interface Persona {
  photo: string;
  name: string;
  summary: string;
  bio?: string;
  profession: Profession;
}
