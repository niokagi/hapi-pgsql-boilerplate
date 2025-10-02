import Lab from "@hapi/lab";
import { expect } from "@hapi/code";
import Hapi from "@hapi/hapi";
import GreetingsHandler from "../../src/api/greetings/handler.js";

export const lab = Lab.script();
const { describe, it, before } = lab;

describe("greetings api", () => {
  let server;

  before(async () => {
    server = Hapi.server();

    const greetingsHandler = new GreetingsHandler();
    server.route({
      method: "GET",
      path: "/",
      handler: greetingsHandler.getGreetingHandler,
    });
  });

  describe("GET /", () => {
    it("should response with 200 and a greetings in json", async () => {
      const res = await server.inject({
        method: "GET",
        url: "/",
      });
      expect(res.statusCode).to.equal(200);

      const payload = JSON.parse(res.payload);
      expect(payload.status).to.equal("success");
      expect(payload.message).to.exist();
    });
  });
});
