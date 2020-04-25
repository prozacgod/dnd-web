module.exports = {
  api: {
    key: require("./data/api.json").key,
    port: process.env.PORT ? parseInt(process.env.PORT) : 9000,
  },

  services: [
    {
      name: "database",
      service: require("@adamite/service-database"),
      options: {
        adapter: new require("@adamite/service-database/adapters/rethinkdb")({
          host: "localhost",
          port: 32769,
          defaultDb: "default",
        }),
        rules: require("./database/rules"),
      },
    },
    {
      name: "auth",
      service: require("@adamite/service-auth"),
      options: {
        secret: "abcd1234==",
      },
    },
    {
      name: "functions",
      service: require("@adamite/service-functions"),
      options: {
        root: require("./functions"),
        sdk: {},
      },
    },
  ],
};
