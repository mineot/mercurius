import AdminPage from "@adminPage/AdminPage.vue";
import HomePage from "@publicPage/HomePage.vue";

import AuthPage from "@authPage/AuthPage.vue";
import ChangePasswordPage from "@authPage/ChangePasswordPage.vue";
import RecoveryPage from "@authPage/RecoveryPage.vue";
import SignInPage from "@authPage/SignInPage.vue";
import SignUpPage from "@authPage/SignUpPage.vue";

const registerRouters = [
  { path: "/", component: HomePage },
  { path: "/admin", component: AdminPage },
  {
    path: "/auth",
    component: AuthPage,
    children: [
      { path: "signin", component: SignInPage },
      { path: "signup", component: SignUpPage },
      { path: "recovery", component: RecoveryPage },
      { path: "change_password", component: ChangePasswordPage },
    ],
  },
];

export default registerRouters;
