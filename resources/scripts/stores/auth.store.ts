import { AUTH_SIGNED } from "@constant/api.endpoints";
import { defineStore } from "pinia";

export const authStore = defineStore("auth-store", () => {
  async function signed(): Promise<boolean> {
    const response = await fetch(AUTH_SIGNED);
    return response.status === 200;
  }

  return { signed };
});
