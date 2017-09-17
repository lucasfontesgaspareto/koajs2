import Post from './../../models/Post'

export default async (ctx) => {

  if(ctx.request.body.title) {
    ctx.request.body.slug = slugfy(ctx.request.body.title)
  }

  let post = new Post(ctx.request.body)

  try {
    await post.save()
  } catch (e) {
    throw new Error(e)
  }

  ctx.status = 201
  ctx.body = post
}

const slugfy = text => {
  return text.toLowerCase()
             .replace(/ /g, '-')
             .replace(/[-]+/g, '-')
             .replace(/[^\w-]+/g, '')
}
