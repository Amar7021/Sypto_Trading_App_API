import express from "express"
import cors from "cors"

// Express App
const app = express()

// Middleswares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// Routes
import userRoutes from "./routes/user.routes.js"

app.use("/api/v1", userRoutes)

app.use("/", (_, res) => {
  res.send({ Message: "Welcome To Express World!!" })
})

export default app
