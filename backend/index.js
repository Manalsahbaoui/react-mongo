const express = require('express'); 
const mongoose = require('mongoose');
const route = require('./routers/routre'); 
const bodyParser = require('body-parser'); 
const cors=require("cors")
const app = express(); // cancrea mnha app
app.use(cors())
app.use(bodyParser.json()); 
app.use('/api', route); 
const mongoDBURL = 'mongodb://127.0.0.1:27017/'; // connexion de data base a laide l dak url 
mongoose.connect(mongoDBURL)                                                                                                        
    .then(() => { // ila tconecta had server mea data base 
        console.log('Connected to MongoDB'); 
    }) 
    .catch((err) => { // catch katchdo 
        console.error('Failed to connect to MongoDB:', err.message);
    }); 
    const serverport=7000;
    app.listen(serverport, () => {
        console.log(`Server is running on port ${serverport}`);
    });

