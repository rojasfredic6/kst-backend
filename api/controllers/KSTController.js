/**
 * KSTController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `KSTController.create()`
   */
  create: async function (req, res) {
    try{
      let params = req.allParams()
      const name =`${params.vertical.charAt(0).toUpperCase()}${params.vertical.slice(1).toLowerCase()}`
      const vertical = await Vertical.findOne({ name })
      if(!vertical){
        return res.serverError({err:"No existe la vertical"})
      }
      const kst = await KST.create({
        date: params.date,
        user: req.user,
        vertical: vertical.id
      }).fetch()
      return res.ok(kst)
    }catch(err){
      return res.serverError({err})
    }
  }

};

