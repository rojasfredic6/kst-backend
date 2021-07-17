/**
 * VerticalController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  

  /**
   * `VerticalController.create()`
   */
  create: async function (req, res) {
    try{
      let params = req.allParams();
      let name = `${params.name.charAt(0).toUpperCase()}${params.name.slice(1).toLowerCase()}`
      const vertical = await Vertical.create({name}).fetch()
      return res.ok(vertical)
    }catch(err){
      return res.serverError({err})
    }
  }

};

