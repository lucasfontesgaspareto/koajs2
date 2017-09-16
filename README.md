### create a post
- curl -H "Content-Type: application/json" -X POST -d '{"title":"Lucas Fontes Gaspareto","description":"My name correct","txt":"I am a programmer"}' http://localhost:3000/post

### edit a post
- curl -H "Content-Type: application/json" -X PUT -d '{"title":"Gaspareto Fontes Lucas","description":"My name incorrect","txt":"I am a fucker programmer"}' http://localhost:3000/post/:id

### delete a post
- curl -X DELETE http://localhost:3000/post/:id

### show a post
- curl -X GET http://localhost:3000/post/:id

### show all posts
- curl -X GET http://localhost:3000/posts


### scripts

- npm run dev
- npm run build
