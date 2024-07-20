import PublicMain from "./public/Main.vue";

import AdminMain from "./admin/Main.vue";

import AuthChangePassword from "./auth/ChangePassword.vue";
import AuthCodeValidator from "./auth/CodeValidator.vue";
import AuthMain from "./auth/Main.vue";
import AuthRecovery from "./auth/Recovery.vue";
import AuthSignIn from "./auth/SignIn.vue";
import AuthSignUp from "./auth/SignUp.vue";

export const PATHS = {
  PUBLIC: {
    HOME: {
      TO: "/",
      PATH: "/",
      NAME: "HOME",
    },
  },
  ADMIN: {
    HOME: {
      TO: "/admin",
      PATH: "/admin",
      NAME: "ADMIN",
    },
  },
  AUTH: {
    HOME: {
      TO: "/auth",
      PATH: "/auth",
      NAME: "AUTH",
    },
    SIGNIN: {
      TO: "/auth/signin",
      PATH: "/signin",
      NAME: "SIGN_IN",
    },
    SIGNUP: {
      TO: "/auth/signup",
      PATH: "/signup",
      NAME: "SIGN_UP",
    },
    RECOVERY: {
      TO: "/auth/recovery",
      PATH: "/recovery",
      NAME: "RECOVERY",
    },
    CHANGE_PASSWORD: {
      TO: "/auth/change_password",
      PATH: "/change_password",
      NAME: "CHANGE_PASSWORD",
    },
    CODE_VALIDATOR: {
      TO: "/auth/code_validator",
      PATH: "/code_validator",
      NAME: "CODE_VALIDATOR",
    },
  },
};

export const routes = [
  {
    path: PATHS.PUBLIC.HOME.PATH,
    name: PATHS.PUBLIC.HOME.NAME,
    component: PublicMain,
  },
  {
    path: PATHS.ADMIN.HOME.PATH,
    name: PATHS.ADMIN.HOME.NAME,
    component: AdminMain,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: PATHS.AUTH.HOME.PATH,
    name: PATHS.AUTH.HOME.NAME,
    component: AuthMain,
    children: [
      {
        path: PATHS.AUTH.SIGNIN.PATH,
        name: PATHS.AUTH.SIGNIN.NAME,
        component: AuthSignIn,
      },
      {
        path: PATHS.AUTH.SIGNUP.PATH,
        name: PATHS.AUTH.SIGNUP.NAME,
        component: AuthSignUp,
      },
      {
        path: PATHS.AUTH.RECOVERY.PATH,
        name: PATHS.AUTH.RECOVERY.NAME,
        component: AuthRecovery,
      },
      {
        path: PATHS.AUTH.CHANGE_PASSWORD.PATH,
        name: PATHS.AUTH.CHANGE_PASSWORD.NAME,
        component: AuthChangePassword,
      },
      {
        path: PATHS.AUTH.CODE_VALIDATOR.PATH,
        name: PATHS.AUTH.CODE_VALIDATOR.NAME,
        component: AuthCodeValidator,
      },
    ],
  },
];
