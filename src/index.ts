import express from 'express';
import cors from "cors";

const app = express();
const PORT = 4000

app.use(cors())
app.use(express.json())

app.post('/deploy', (req, res)=>{
    const repoURL = req.body.repoURL;
    console.log(repoURL)

    res.json({})
})


app.listen(PORT, ()=>{
    console.log(`Listening on PORT: ${PORT}`)
})