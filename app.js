const { error } = require('console');
const express = require('express');
require('dotenv').config();
const fs = require('fs').promises;


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {

    try{
        const fileName = 'example.txt';
        const content = "1 + 1 is 2 and you deserve 3!";

        //writing the content to the file
        await fs.writeFile(fileName, content, 'utf-8');
        
    }catch(err){
       console.error('Internal Server Error:', error);
        res.status(500).send('Server is no bueno!')


    }

});


app.listen(PORT, () =>{
    console.log(`Connect on port ${PORT}`);
});

