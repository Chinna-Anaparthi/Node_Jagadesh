var express = require('express');
var router = express.Router();
var db1 = require("../model/studentMarks");


router.get("/Getdata", (req, res) => {
    db1.getdata1(req, res, (data) => {});
  });

module.exports = router;
