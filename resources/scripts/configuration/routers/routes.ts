import AdminPage from "@page/admin/AdminPage.vue";
import AuthPage from "@page/auth/AuthPage.vue";
import ChangePasswordPage from "@page/auth/ChangePasswordPage.vue";
import CodeValidatorPage from "@page/auth/CodeValidatorPage.vue";
import HomePage from "@page/public/HomePage.vue";
import RecoveryPage from "@page/auth/RecoveryPage.vue";
import SignInPage from "@page/auth/SignInPage.vue";
import SignUpPage from "@page/auth/SignUpPage.vue";

export const routes = [
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
      { path: "signin", name: "SignIn", component: SignInPage },
      { path: "signup", name: "SignUp", component: SignUpPage },
      { path: "recovery", name: "Recovery", component: RecoveryPage },
      { path: "change_password", name: "ChangePassword", component: ChangePasswordPage },
      { path: "code_validator", name: "CodeValidator", component: CodeValidatorPage },
    ],
  },
];
