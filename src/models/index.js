import { init } from "@rematch/core";
import { createLogger } from "redux-logger";
import { LoginInfo } from "./login-model";
import {Admin} from "./admin.model"

const logger = () =>
  createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });

const models = {
  LoginInfo,
  Admin,
};

export const store = init({
  models,
  redux: {
    middlewares: [
      ...(process.env.NODE_ENV === "development" ? [logger()] : []),
    ],
    devtoolOptions: {
      traceLimit: 25,
      trace: true,
    },
  },
});
