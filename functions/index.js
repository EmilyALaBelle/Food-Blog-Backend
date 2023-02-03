import functions from 'firebase-functions'
import express from "express";
import cors from "cors"

import { newPost } from './src/posts.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/newPost', newPost)

export const api = functions.https.onRequest(app)