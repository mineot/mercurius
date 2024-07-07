import { AUTH_SIGNED } from "@constant/api.endpoints";
import { defineStore } from "pinia";

export const authStore = defineStore("auth-store", () => {
  async function isAuthenticated(): Promise<boolean> {
    const response = await fetch(AUTH_SIGNED);
    const data = await response.json();
    return data.isAuthenticated;
  }

  return { isAuthenticated };
});
