import express from 'express';
import cors from "cors";
import simpleGit from 'simple-git'
import path from "path"
import { generateRandomId } from './utils';
import { getAllFiles } from './pathsAndFiles';

const app = express();
const PORT = 4000

app.use(cors())
app.use(express.json())

app.post('/deploy', async (req, res)=>{
    const repoURL = req.body.repoURL;
    console.log(repoURL)
    const randId = generateRandomId();
    await simpleGit().clone(repoURL, path.join(__dirname,`/output/${randId}`))

    const files = getAllFiles(path.join(__dirname,`/output/${randId}`))

    res.json({
        msg: "Cloned",
        id: randId // put it in S3
    })
})


app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
})