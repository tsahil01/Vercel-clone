import express from 'express';
import cors from "cors";
import simpleGit from 'simple-git'
import path from "path"
import { generateRandomId } from './utils';
import { getAllFiles } from './pathsAndFiles';
import { uploadFile } from './AzureBlob';

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

    await files.forEach(async file => {
        await uploadFile(file.slice(__dirname.length + 1), file);
    })
    console.log("Done")

    res.json({
        msg: "Cloned",
        id: randId // put it in S3
    })
})


app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
})