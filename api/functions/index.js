const { InvokableFunction } = require("@adamite/service-functions");

module.exports = {
  helloWorld: new InvokableFunction(() => {
    console.log("Hello World");
  })
};
