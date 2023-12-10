const path=require("path");

const express = require("express");

const app=express();

const PORT=3000 || process.env.PORT;

app.use(express.static(path.join(__dirname,'public')));