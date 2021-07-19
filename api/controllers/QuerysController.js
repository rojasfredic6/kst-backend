/**
 * QuerysController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `QuerysController.userInfo()`
   */
  userInfo: async function (req, res) {
    try{
      const { userId } = req.query;
      const userInfo = await Users_Info.findOne({ user: userId })
      if(!userInfo){
        return res.badRequest('Not Found')
      }
      return res.ok(userInfo)
    }catch(err){
      return res.serverError({err})
    }
  },

  /**
   * `QuerysController.userKST()`
   */
  userKST: async function (req, res) {
    try{
      const {userId} = req.query;
      const userKst = await KST.find({ user: userId })
      if(!userKst){
        return res.badRequest("There are not kst's available")
      }
      return res.ok(userKst)
    }catch(err){
      return res.serverError({err})
    }
  },

  /**
   * `QuerysController.userResults()`
   */
  userResults: async function (req, res) {
    return res.json({
      todo: 'userResults() is not implemented yet!'
    });
  }

};

