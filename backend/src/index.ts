import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import axios from "axios"
import credentials from "./middleware/credentials.js"
import corsOptions from "./config/corsOptions.js"

// need to compile any updates on server

const app = express()
app.use(credentials)
app.use(cors(corsOptions))

dotenv.config()

const port = process.env.PORT

app.get("/", (req, res) => {
  res.send("API TESTER")
})

app.get("/nasa", async (req, res) => {
  const api_key = process.env.NASA_API_KEY
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
  const response = await axios.get(url)
  res.send(response.data)
})

app.listen(port, () => {
  console.log(`now listening on port ${port}`)
})
