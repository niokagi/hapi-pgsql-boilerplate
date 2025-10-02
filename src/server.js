import Hapi from "@hapi/hapi";
import "dotenv/config";
import "@dotenvx/dotenvx/config";
import * as config from "./config/index.js";
// modules import here ...
import users from "./api/users/index.js";
import { greetingsPlugin } from "./api/greetings/index.js";

const init = async () => {
  const server = Hapi.server({
    host: config.HOST,
    port: process.env.NODE_ENV === "test" ? 0 : config.PORT,
    routes: {
      cors: {
        origin: ["*"],
      },
      security: {
        hsts: {
          maxAge: 31536000,
          includeSubDomains: true,
          preload: true,
        },
        xframe: "deny",
        xss: "enabled",
      },
    },
  });

  await server.register([{ plugin: users }, { plugin: greetingsPlugin }]);

  await server.start();
  console.log(`server running on ${server.info.uri}`);

  // for test units
  // return server;
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
