import config from "dotenv";

config.config();

export default {
  app: {
    name: process.env.APP_NAME,
    port: process.env.APP_PORT,
    env: process.env.APP_ENV
  },
  jwtKey: process.env.JWT_KEY,
};
