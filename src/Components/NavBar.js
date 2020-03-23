import React, {useState} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {getUser} from '../Duxx/reducer'


const NavBar = (props, history) => {
    const [toggleDropdown, setToggleDropdown] =useState(false);

    const showDropdown = () => {
        setToggleDropdown(!toggleDropdown)
    }

    return(
        <div>
            <button onClick = {() => props.history.push('/')}>HOME</button>
            <button onClick = {() => props.history.push('/allproducts')}>All Products </button>
            <button onClick = {() => props.history.push('/gourds')}>Gourds </button>
            <button onClick = {() => props.history.push('/bombillas')}>Bombillas </button>
            NavBar
            <button onClick = {() => props.history.push('/mycart')}>My Cart </button>
            <button onClick = {() => props.history.push('/wishlist')}>Wishlist </button>
            <button onClick = {() => props.history.push('/auth')}>Login </button>
            
        </div>
    )
}
//     function mapStateToProps(state){
//         return{user: state.reducer.user}
// }

// export default connect(mapStateToProps, {getUser})(withRouter(NavBar));
export default NavBar