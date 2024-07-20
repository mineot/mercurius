import { authStore } from "@stores/auth.store";

export async function authGuard(to: any, from: any, next: any) {
  if (!to.matched.some((record: any) => record.meta.requiresAuth)) {
    return next();
  }

  if (await authStore().signed()) {
    return next();
  }

  next({ name: "SignIn" });
}
