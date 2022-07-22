import express from "express"
import cursos from "./database/cursos.js"

const server = express()
const port = 3000

server.use(express.json())


server.listen(port, ()=>{
    console.log(`Server conectado. http://localhost:${port}/`);
})