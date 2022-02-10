const Url = require("../model/Url");
const ApiError = require("../model/ApiError");

class UrlDao {
    constructor() {
      this.clients = [];
    }
  
    async create({alias, longURL }) {
        var url;
        if (alias === undefined || alias === "") {
          throw new ApiError(400, "Alias must be entered!");
        }
        if (longURL === undefined || longURL === "") {
          throw new ApiError(400, "LongURL must be entered!");
        }
        try {
          url = await Url.create({alias, longURL});
        } catch (err) {
          if (err.code == 11000) {
            throw new ApiError(505, "Alias exists already");
          }
        }
        return url;
    }
  
    // returns an empty array if there is no client with the given ID
    async read(id) {
        const url = await Url.findOne({alias: id});
        return url;
         
    }
  }
  
  module.exports = UrlDao;