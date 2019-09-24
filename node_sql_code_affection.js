/*
https://www.youtube.com/watch?v=4fWWn2Pe2Mk

$npm init -y

$npm install --save mysql express body-parser

MySql Workbensh ===>> server for MySql

//create dabase employeedb

//create employee table

CREATE TABLE 'employee' (
  'EmpID' int(11) NOT NULL AUTO_INCREMENT,
  'Name' varchar(45) DEFAULT NULL,
  'EmpCode' varchar(45) DEFAULT NULL,
  'Salary' int(11) DEFAULT NULL,
  PRIMARY KEY ('EmpID')
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/

const express = require('express');
const mysql = require('mysql');
