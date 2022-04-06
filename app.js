// const express = require("express");
import express from 'express';
import fetch from "node-fetch";
import cors from "cors";
import path from "path";
import {fileURLToPath} from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.set('views',path.join(__dirname,"views"));
app.set('view engine', 'ejs');

app.use("/static", express.static('./static/'));
app.use('/css', express.static(__dirname + 'node_modules/bootstrap/dist/css'));


let rootURL = "https://wegivmerchantapp.firebaseapp.com/exam/bi-member-day-2020-04-01.json";
    app.get('/',function(req,res){
          
        fetch(rootURL)
            .then((res) => res.json())
            .then((data) => {
               
                const p =data.data.list;
                res.render('index.ejs',{'customerlist':p});
              
                
    });
    })
            
app.listen(3000);
console.log('Running at Port 3000');



