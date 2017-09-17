import Post from './../../models/Post'

export default async (ctx) => {
  let posts = {}
  try {
    posts = await Post.find({})
  } catch (e) {
    throw new Error(e)
  }

  if (!posts || !posts.length) {
    ctx.status = 404
    return ctx.body = []
  }

  ctx.status = 200
  ctx.body = posts
}
