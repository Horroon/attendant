import { init } from "@rematch/core";
import { createLogger } from "redux-logger";
import { LoginInfo } from "./login-model";

const logger = () =>
  createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });

const models = {
  LoginInfo,
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
