// const Users = require('./../models/Users');alter

const AuthenticationService = require('../services/AuthenticationServices')

module.exports = async (req, res, next) =>{
  if(!req.headers || !req.headers.authorization){
    return res.badRequest({err: 'No hay una cabecera de autorizacion'})
  }

  const token = req.headers.authorization;
  const decodedToken = AuthenticationService.JWTVerify(token);
  const user = await Users.findOne({ id: decodedToken.user, admin: true});
  if(!user){
    return next({err: 'Unauthorized'})
  }
  req.user = user.id;
  next()
}