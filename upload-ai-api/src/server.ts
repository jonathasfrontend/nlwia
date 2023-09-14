import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscription } from './routes/create-transcription'
import { generateAllCompetionRoute } from './routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscription)
app.register(generateAllCompetionRoute)

app.listen({
  port: 3000,
}).then(() => {
  console.log('HTTP Server Running!')
})