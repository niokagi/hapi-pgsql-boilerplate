import GreetingsHandler from "./handler.js";
import { greetingRoutes } from "./routes.js";

export const greetingsPlugin = {
  name: "api-greetings",
  version: "1.0.0",
  register: async (server) => {
    const greetingsHandler = new GreetingsHandler();
    server.route(greetingRoutes(greetingsHandler));
  },
};
