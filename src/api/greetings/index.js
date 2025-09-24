import GreetingsHandler from "./handler.js";
import routes from "./routes.js";

export default {
  name: "greetings",
  version: "1.0.0",
  register: async (server) => {
    const greetingsHandler = new GreetingsHandler();
    server.route(routes(greetingsHandler));
  },
};
