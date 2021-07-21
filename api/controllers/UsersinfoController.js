/**
 * UsersinfoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Users_Info = require("../models/Users_Info");alt

module.exports = {
  
  create: async (req, res) =>{
    try{
      let params = req.allParams();
      const info = await Users_Info.create(
        {
          cohort: params.cohort,
          name: params.name,
          last_name: params.last_name,
          country: params.country,
          register_date: params.register_date,
          last_connection: params.last_connection,
          user: req.user
        }
      ).fetch();
      return res.ok(info);
    }catch(err){
      return res.serverError({err})
    }
  }
};

