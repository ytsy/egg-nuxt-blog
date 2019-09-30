const { ObjectId } = require('mongoose').Types
module.exports = (opt, app) => {
  return async (ctx, next) => {
    const { logger } = app
    const { tagID, categoryID } = ctx.query

    let filter = ctx.state.filter || { $and: [] }
    if (tagID) {
      filter.$and.push({
        tagIdList: ObjectId(tagID),
      })
    } else if (categoryID) {
      filter.$and.push({
        categoryID: ObjectId(categoryID),
      })
    }

    ctx.state.filter = filter
     
    await next()
  }
}