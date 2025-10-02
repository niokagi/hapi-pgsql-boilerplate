export const greetingRoutes = (handler) => [
  {
    method: "GET",
    path: "/",
    handler: handler.getGreetingHandler,
  },
];
