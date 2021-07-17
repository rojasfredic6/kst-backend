/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // RUTAS DE USUARIOS
  "POST /users/signup": "UsersController.signup",
  "POST /users/login": "UsersController.login",
  "POST /users_info": "UsersinfoController.create"
};
