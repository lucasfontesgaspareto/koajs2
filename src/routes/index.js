import main from './main'
import post from './post'
import postShow from './post/show'
import postCreate from './post/create'
import postEdit from './post/edit'
import postDelete from './post/delete'

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
