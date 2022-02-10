const express = require("express");
const request = require('request');
const router = express.Router();

const UrlDao = require("../data/UrlDao");
const ApiError = require("../model/ApiError");

const urls = new UrlDao();


router.post("/api/urls", async (req, res, next) => {
    try {

      const { alias, longURL } = req.body;
      const data = await urls.create({ alias, longURL });
      res.status(201).json({ data });
    } catch (err) {
      next(err);
    }
});


router.get("/api/urls/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const data = await urls.read(id);
        console.log("data", data);
        if (data) {
          res.set('Content-Type', 'text/html');
          res.send({long_url: data.longURL})
        } else {
          res.status(400).json('Invalid URL')
        }
    } catch (err) {
      next(err);
    }
  });



module.exports = router;