import axios from "axios";

import AdminPage from "@adminPage/AdminPage.vue";
import AuthPage from "@authPage/AuthPage.vue";
import ChangePasswordPage from "@authPage/ChangePasswordPage.vue";
import CodeValidatorPage from "@authPage/CodeValidatorPage.vue";
import HomePage from "@publicPage/HomePage.vue";
import RecoveryPage from "@authPage/RecoveryPage.vue";
import SignInPage from "@authPage/SignInPage.vue";
import SignUpPage from "@authPage/SignUpPage.vue";

const registerRouters = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthPage,
    children: [
      { path: "signin", name: "Sign In", component: SignInPage },
      { path: "signup", name: "Sign Up", component: SignUpPage },
      { path: "recovery", name: "Recovery", component: RecoveryPage },
      { path: "change_password", name: "Change Password", component: ChangePasswordPage },
      { path: "code_validator", name: "Code Validator", component: CodeValidatorPage },
    ],
  },
];

async function isAuthenticated(): Promise<boolean> {
  try {
    const response = await axios.get("/api/signed");
    return response.data.isAuthenticated;
  } catch (error) {
    return false;
  }
}

async function routerGuard(to: any, from: any, next: any) {
  const requiresAuth: boolean = to.matched.some((record: any) => record.meta.requiresAuth);

  if (!requiresAuth) {
    return next();
  }

  const isAuth: boolean = await isAuthenticated();

  if (isAuth) {
    return next();
  }

  next({ name: "Sign In" });
}

export { registerRouters, routerGuard };
