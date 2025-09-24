const routes = (handler) => [
  {
    method: "GET",
    path: "/",
    handler: handler.getGreetingHandler,
  },
];

export default routes;