const EventEmitter = require("./EventEmitter");

const eventListener = new EventEmitter();

eventListener.on("test", () => {
  console.log("testing");
});
eventListener.on("test", () => {
  console.log("11111");
});

eventListener.emit('test')