/*
https://www.youtube.com/watch?v=4fWWn2Pe2Mk

$npm init -y

$npm install --save mysql express body-parser

MySql Workbensh ===>> server for MySql

//create dabase EmployeeDB

//create employee table
Use EmployeeDB

CREATE TABLE 'Employee' (
  'EmpID' int(11) NOT NULL AUTO_INCREMENT,
  'Name' varchar(45) DEFAULT NULL,
  'EmpCode' varchar(45) DEFAULT NULL,
  'Salary' int(11) DEFAULT NULL,
  PRIMARY KEY ('EmpID')
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES 'employee' WRITE;
INSERT INTO 'employee' VALUES (1,'Peter','EMP01',40000),(2,'John','EMP02',45000);
UNLOCK TABLES;
====================

app.js
*/

const express = require('express');
const app=express();

const bodyParser=require('body-parser');

app.use(bodyParser.json);

const mysql = require('mysql');
const sqlCon = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'1234',
  database:'EmployeeDB'
});

sqlCon.connect((err)=>{
  if(!err)
    console.log('DB connection succeeded.');
  else
    console.log('DB connection failed. \n Err:'+JSON.stringify(err,undefined,2));  
});  

//GET all employee
app.get('/employees',(req,res)=>{
  const sql='SELECT * FROM Employee'
  sqlCon.query(sql,(err,rows,fields)=>{
    if(!err)
      res.send(rows);
      //console.log(rows);
      //console.log(rows[0].EmpID);
    else
      console.log(err);
  });
});



app.listen(3000,(err)=>{
  console.log('Server on port 3000')
})





