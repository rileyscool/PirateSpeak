import OpenAI from 'openai';
const openai = new OpenAI({apiKey: process.env.OPENAIAPIKEY});

import fs from "fs"

import express from 'express';
const app = express();

let gptModel = "gpt-4o" // model of chatgpt to be used

app.get('/', (req, res) => {
    res.sendFile(import.meta.dirname + '/views/index.html');
})

app.get('/*', (req, res) =>{
    if(fs.existsSync(import.meta.dirname + req.url)) {
        res.sendFile(import.meta.dirname + req.url);
    }else{
        res.sendStatus(404);
    }
})

app.post('/pirate', async (req, res) => {
    /* let content = req.params.content
    const completion = await openai.chat.completions.create({
        model: gptModel,
        messages: [
            {"role": "user", "content": "convert the text into pirate talk while keeping the word count around the same or less and using pirate words. "}
        ]
    });
    */
    res.send({"text": /* completion.messages[0].content || */ "Arrr, I be not knowin' what to say here, so I’ll just do this, matey!"});
})

app.listen(3000);