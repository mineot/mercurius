import AdminPage from "@adminPage/AdminPage.vue";
import HomePage from "@publicPage/HomePage.vue";

import AuthPage from "@authPage/AuthPage.vue";
import SignInPage from "@authPage/SignInPage.vue";
import SignUpPage from "@authPage/SignUpPage.vue";
import RecoveryPage from "@authPage/RecoveryPage.vue";

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
    ],
  },
];

export default registerRouters;
