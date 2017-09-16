create a post
curl -H "Content-Type: application/json" -X POST -d '{"title":"Lucas Fontes Gaspareto","description":"My name","txt":"I am a programmer"}' http://localhost:3000/post

edit a post
curl -H "Content-Type: application/json" -X PUT -d '{"title":"Lucas Fontes Gaspareto test","description":"My name is gaspa","txt":"I am a fucker programmer"}' http://localhost:3000/post/59bd69405863552e8096d4dc

delete a post
curl -X DELETE http://localhost:3000/post/59bd69405863552e8096d4dc

show a post
curl -X GET http://localhost:3000/post/:id

show all posts
curl -X GET http://localhost:3000/posts
