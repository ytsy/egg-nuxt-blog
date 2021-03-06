console.log(__filename)

module.exports = app => {
  const { controller, middleware, proxyRouter } = app
  const router = proxyRouter
  /**
   * comments
   */

  router.get('/admin/comments', controller.comment.queryList)

  router.delete(
    '/admin/comments/:id',

    controller.comment.deleteOne
  )

  router.delete('comment', '/admin/comments', controller.comment.deleteMany)

  router.get(
    '/admin/articles/:articleID/comments',

    controller.comment.queryList
  )

  router.get(
    '/articles/:id/comments',

    controller.comment.queryList
  )
  router.post('comment', '/articles/:id/comments', controller.comment.createOne)

  router.patch('/comments/:id/thumbup', controller.comment.thumbup)
}
