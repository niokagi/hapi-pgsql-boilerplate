class GreetingsHandler {
  constructor() {
    this.getGreetingHandler = this.getGreetingHandler.bind(this);
  }

  async getGreetingHandler(request, h) {
    return {
      status: "success",
      message: "welcome to the hapi.js BE boilerplate!",
    };
  }
}

export default GreetingsHandler;
