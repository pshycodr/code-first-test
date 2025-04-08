import { Hono } from 'hono'

const app = new Hono()

type Idea = {
  id: number
  title: string
  description: string
}

let ideas: Idea[] = []
let idCounter = 1

app.post('/ideas', async (c) => {
  const body = await c.req.json()
  const { title, description } = body

  if (!title || !description || typeof title !== 'string' || typeof description !== 'string') {
    return c.json({ error: 'Title and description are required and must be non-empty strings.' }, 400)
  }

  const newIdea = {
    id: idCounter++,
    title,
    description
  }

  ideas.push(newIdea)

  return c.json(newIdea, 201)
})

app.get('/ideas', (c) => {
  return c.json(ideas)
})

export default app
