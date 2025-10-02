export default class GreetingsHandler {
  constructor() {
    this.getGreetingHandler = this.getGreetingHandler.bind(this);
  }

  async getGreetingHandler(request, h) {
    try {
      return h
        .response({
          status: "success",
          message: "welcome to the hapi.js BE boilerplate!",
        })
        .code(200);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
