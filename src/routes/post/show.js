import Post from './../../models/Post'
import mongoose from 'mongoose'

export default async (ctx) => {
  let post = {};

  try {
    if(mongoose.Types.ObjectId.isValid(ctx.params.query)) {
      post = await Post.findById(ctx.params.query)
    } else {
      post = await Post.findOne({
        slug: ctx.params.query
      })
    }
  } catch (e) {
    throw new Error(e)
  }

  if(!post) {
    ctx.status = 404
    return ctx.body = {}
  }

  ctx.status = 200
  ctx.body = post
}
