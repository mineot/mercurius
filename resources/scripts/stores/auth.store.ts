import { AUTH_SIGNED } from "@constant/api.endpoints";
import { defineStore } from "pinia";
import { Get, Response } from "@api";

export const authStore = defineStore("auth-store", () => {
  async function signed(): Promise<boolean> {
    const response = await Get<Response<any>>({ url: AUTH_SIGNED });
    return response.status === 200;
  }

  return { signed };
});
