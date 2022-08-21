import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { Users } from '../../constants/Users'

const Register = () => {

  let userRegister = '';
  let userPassword = '';

  return (
    <div className='register'>
        <img src="https://frikerio.files.wordpress.com/2019/09/harry-potter-logo.png?w=810" alt="harrypotter" />
        <div className='registerSystem'>
            <label className='registerSystem--user'>Usuario</label>
            <input className='registerSystem--user__input' type="text" onInput={ e => { return  userRegister = e.target.value  } }/>
            <label className='registerSystem--password' >Password</label>
            <input className='registerSystem--password__input' type="password" onInput={ e => {  return userPassword = e.target.value } }/> 
            <Link to="/login">
              <button className='registerSystem--login' type='Button' onClick={ e => { return Users.push({ idUser: userRegister, password: userPassword} )}}>Register </button>
            </Link> 
        </div>
    </div>
  )
}

export default Register