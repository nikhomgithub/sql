install XAMPP 
     for Apache server, PHP MyAdmin (For my sql dashboard)

$npm init -y

$npm install --save mysql express

$npm install -g nodemon

--------
--------
app.js

const express = require('express');
const mysql = require('mysql');

const app = express();

app.listen('3000',()=>{
  console.log('Server start on port 3000');
})



