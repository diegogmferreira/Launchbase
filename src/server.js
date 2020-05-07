const express = require('express') //Começo do criar servidor
const nunjucks = require('nunjucks')
const routes = require ('./routes')
const methodOverride = require ('method-override')
const session = require('./config/session')

const server = express() // Fim no criar servidor

server.use(session)
server.use((req, res, next) => {
    res.locals.session = req.session
    next()
})

server.use(express.urlencoded({ extended: true })) // função para ativar o Req.Body na hora de criar 
server.use(express.static('public')) // Arrumar a pasta Public que irá servir o Scripts.JS e o CSS
server.use(methodOverride('_method'))
server.use(routes) // Arrumando as Routes

server.set("view engine", "njk") // Arquivos servidos pelo Nunjucks //

nunjucks.configure("src/app/views", { // Inicio da configuração da View Engine Nunjucks
    express:server,
    autoescape: false,
    noCache: true
}) // Fim da configuração da View Engine Nunjucks

server.listen(5000, function() {
    console.log("server is running") // Colocar o servidor online
})