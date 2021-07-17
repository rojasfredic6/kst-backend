const bcrypt = require('bcrypt');
const AuthenticationService = require('../services/AuthenticationServices')
const saltRound = 10;

/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  signup: async function(req, res){
    try{
      // const squema = joi.object().keys({
      //   email: joi.string().required().email()
      // })
      const {email, password} = req.allParams()
      if(password.length < 8){
        return res.badRequest({error: 'Minimum password length is 8 characters'});
      }
      const hashedPassword = await bcrypt.hash(password, saltRound);
      const user = await Users.create({email, password: hashedPassword}).fetch()
      return res.ok(user)
    }catch(err){
      return res.serverError({err}).json();
    }
  },
  login: async function(req, res){
    try{
      const { email, password } = await req.allParams();
      const user = await Users.findOne({email});
      if(!user){
        return res.notFound({err: 'User not Found'})
      }
      const comparedPassword = await bcrypt.compare(password, user.password);
      const token = AuthenticationService.JWTIssuer({user: user.id}, '1 day')
      return (comparedPassword) ? res.ok({token}) : res.badRequest({err: 'Unauthorized'})
    }catch(err){
      return res.serverError()
    }
  }
};

0