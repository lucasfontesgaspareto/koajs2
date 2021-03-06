import Post from './../../models/Post'

export default async (ctx) => {
  let post = {}
  try {
    post = await Post.findByIdAndRemove(ctx.params.id)
  } catch (e) {
    throw new Error(e)
  }
  if(!post) {
    return ctx.status = 404
  }
  ctx.status = 204
}
