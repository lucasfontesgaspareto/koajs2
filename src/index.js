import main from './controllers/main'
import post from './controllers/post'
import postShow from './controllers/post/show'
import postCreate from './controllers/post/create'
import postEdit from './controllers/post/edit'
import postDelete from './controllers/post/delete'

export default (app, router) => {
  router
    .get('/', main)
    .get('/posts', post)
    .get('/post/:query', postShow)
    .post('/post', postCreate)
    .put('/post/:id', postEdit)
    .patch('/post/:id', postEdit)
    .del('/post/:id', postDelete)
}
