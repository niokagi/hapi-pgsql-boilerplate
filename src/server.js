import Hapi from "@hapi/hapi";
import "dotenv/config";
import * as config from "./config/index.js";
// modules import here ...
import users from "./api/users/index.js";
import greetings from "./api/greetings/index.js";

const init = async () => {
  const server = Hapi.server({
    host: config.HOST,
    port: config.PORT,
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

  await server.register([
    {
      plugin: users,
    },
    {
      plugin: greetings,
    },
  ]);

  await server.start();
  console.log(`server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
