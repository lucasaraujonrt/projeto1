var express = require("express");
var router = express.Router();

router.post("/on", function(req, res, next) {
  res.json({ status: "OK", data: "Led Aceso" });
});
// apaga o led conectado no pino 4 das raspberry
router.post("/off", function(req, res, next) {
  res.json({ status: "OK", data: "Led Apagado" });
});
module.exports = router;
