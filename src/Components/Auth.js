import React, {useState} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {getUser} from '../Duxx/reducer'
import {connect} from 'react-redux'


const Auth = ({history, getUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    const register = () => {
        axios.post('/auth/register', {username, password, email})
        .then(results => {
            history.push('/')
        })
    };

    const login = () => {
        axios.post('/auth/login', {username, password, email})
        .then(results => {
            getUser(results.data)
            history.push('/')
        })
    };
    
    return (
        <div>auth
            <div>
                <p>{'USERNAME'}</p>
                <input 
                name='username'
                value= {username}
                placeholder= 'username'
                onChange = {e => setUsername(e.target.value)}/>
            </div>
            <div>
                <p>{'PASSWORD'}</p>
                <input
                name= 'password'
                value= {password}
                placeholder= 'password'
                onChange= {e => setPassword(e.target.value)}/>
            </div>
            <div>
                <p>{'EMAIL'}</p>
                <input
                name= 'email'
                value= {email}
                placeholder= 'email'
                onChange= {e => setEmail(e.target.value)}/>
            </div>
            <button
            onClick= {() => login()}>
                LOGIN 
            </button>
            <button
            onClick= {() => register()}>
                REGISTER 
            </button>
        </div>
    )
}