import "reflect-metadata"
import express from "express"
import "./database/dataSource";

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})