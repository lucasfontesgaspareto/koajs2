import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const PostSchema = mongoose.Schema({
  title: String,
  description: String,
  txt: String,
  slug: String
})

export default mongoose.model('Post', PostSchema)
