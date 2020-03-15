require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db running')
    app.listen(SERVER_PORT, () => console.log(`server is running on port ${SERVER_PORT}`))
}).catch(err => console.log(err))


const productCtrl = require('./controllers/controller')

//endpoints

app.get('/api/products', productCtrl.getProducts)
app.post('/api/post', productCtrl.postProduct)
app.put('/api/products/:product_id', productCtrl.putProduct)
app.delete('api/products/:product_id', productCtrl.deleteProduct)