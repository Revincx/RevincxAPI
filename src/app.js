require('module-alias/register')
const app = require('./router')
const express = require('express')

app.use(express.static('./public/'))