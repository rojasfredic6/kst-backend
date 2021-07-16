const jwt = require('jsonwebtoken');
const SECRET_KEY = "SOMOSLOSRETROCARECHIMBASPARCE@1234#?"

const JWTIssuer = (payload, expiresIn) => {
  return jwt.sign(payload, SECRET_KEY, {expiresIn});
}

const JWTVerify = token =>{
  return jwt.verify(token, SECRET_KEY)
}

module.exports = {
  JWTIssuer,
  JWTVerify
}