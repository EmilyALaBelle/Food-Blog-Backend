import mongoSecrets from "./mongoSecrets.js"
import { MongoClient, ObjectId } from "mongodb"
const client = new MongoClient(mongoSecrets)

const db = client.db("Posts")
const posts = db.collection("Post")

export async function getAllPosts(req, res) {
  const filter = {}
  try {
    const allPosts = await posts.find(filter).toArray()
    res.status(200).json(allPosts)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err })
  }
}

export async function newPost(req, res) {
  const post = req.body
  try {
    await posts.insertOne(post)
    await getAllPosts(req, res)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err })
  }
}
