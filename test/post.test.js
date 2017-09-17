import request from 'supertest'
import app from './../dist/app'

const server = request(app.listen())
let response = {}
let testDocumentId = ''

describe('test post entry points', () => {
  test('POST /post', async () => {
    response = await server.post('/post').send({
      title: 'Title test',
      description: 'Description test',
      txt: 'Text test'
    })
    /* define id of document created in the first test for using bellow */
    testDocumentId = response.body._id
    expect(response.statusCode).toBe(201)
  })

  test('GET /posts', async () => {
    response = await server.get('/posts')
    expect(response.statusCode).toBe(200)
  })

  test('GET /post/:query', async () => {
    response = await server.get(`/post/${testDocumentId}`)
    expect(response.statusCode).toBe(200)
  })

  test('PATCH /post/:id', async () => {
    response = await server.patch(`/post/${testDocumentId}`).send({
      title: 'Title test update',
      description: 'Description test update',
      txt: 'Text test update'
    })
    expect(response.statusCode).toBe(204)
  })

  test('DELETE /post/:id', async () => {
    response = await server.delete(`/post/${testDocumentId}`)
    expect(response.statusCode).toBe(204)
  })
})
