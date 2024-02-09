import express from 'express';
import cors from "cors";
import simpleGit from 'simple-git'
import { generateRandomId } from './utils';

const app = express();
const PORT = 4000

app.use(cors())
app.use(express.json())

function generate(){

}

app.post('/deploy', async (req, res)=>{
    const repoURL = req.body.repoURL;
    console.log(repoURL)
    const randId = generateRandomId();
    await simpleGit().clone(repoURL, `output/${randId}`)
    res.json({})
})


app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
})