import { getCurrentInstance } from "vue";

export async function getAxios(): Promise<Axios> {
  const instance = getCurrentInstance();
  return instance?.appContext?.config?.globalProperties?.$axios as Axios;
}

export interface Axios {
  get: (url: string) => Promise<any>;
}
