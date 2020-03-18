var express = require("express");
var router = express.Router();
const Gpio = require("onoff").Gpio;
const LED = new Gpio(4, "out");

router.post("/on", function(req, res, next) {
  LED.writeSync(1);
  res.json({ status: "OK", data: "Led Aceso" });
});
// apaga o led conectado no pino 4 das raspberry
router.post("/off", function(req, res, next) {
  LED.writeSync(0);
  res.json({ status: "OK", data: "Led Apagado" });
});
module.exports = router;
