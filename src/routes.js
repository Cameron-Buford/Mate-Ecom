import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import AllProducts from './Components/AllProducts'
import Bombillas from './Components/Bombillas'
import Dashboard from './Components/Dashboard'
import Gourds from './Components/Gourds'
import MyCart from './Components/MyCart'
import Wishlist from './Components/Wishlist'




export default (
    <Switch>
        <Route exact path= '/' component= {Dashboard}/>
        <Route path = '/allproducts' component = {AllProducts}/>
        <Route path = '/auth' component = {Auth}/>
        <Route path = '/bombillas' component = {Bombillas}/>
        <Route path = '/gourds' component = {Gourds}/>
        <Route path = '/mycart' component = {MyCart}/>
        <Route path = '/wishlist' component = {Wishlist}/>
    </Switch>

);