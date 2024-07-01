import { API_SIGNED } from "@constant/auth.constants";
import axios from "axios";

async function isAuthenticated(): Promise<boolean> {
  try {
    const response = await axios.get(API_SIGNED);
    return response.data.isAuthenticated;
  } catch (error) {
    return false;
  }
}

export async function authGuard(to: any, from: any, next: any) {
  if (!to.matched.some((record: any) => record.meta.requiresAuth)) {
    return next();
  }

  if (await isAuthenticated()) {
    return next();
  }

  next({ name: "SignIn" });
}
