import { authStore } from "@store/auth.store";

export async function authGuard(to: any, from: any, next: any) {
  if (!to.matched.some((record: any) => record.meta.requiresAuth)) {
    return next();
  }

  const store = authStore();

  if (await store.isAuthenticated()) {
    return next();
  }

  next({ name: "SignIn" });
}
