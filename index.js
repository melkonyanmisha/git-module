import express from "express";

const app = express()
const port = 3000

app.use('/test', (req, res, next) =>{
    console.log('Midd 1');
    next()
})

app.get('/', (req, res) => {
    console.log('Home page')
    res.send('Hello Valoaaad!')
})

app.get('/test', (req, res) => {
    console.log('Test page')
    res.send('Hello Test!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function test(a, b){

}