import React from 'react'
import {Switch, Route} from 'react-router-dom'



export default (
    <Switch>
        <Route exact path= '/' component= {Dashboard}/>
        <Route path = '/allproducts' component = {AllProducts}/>
        <Route path = '/auth' component = {Auth}/>
        <Route path = '/bombillas' component = {Bombillas}/>
        <Route path = '/gourds' component = {Gourds}/>
        <Route path = '/mycart' component = {MyCart}/>
    </Switch>

)