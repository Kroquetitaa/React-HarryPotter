import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { Users } from '../../constants/Users'

const Login = () => {

  let userLogin = '';
  let userPassword = '';

  return (
    <div className='login'>
        <img src="https://i.pinimg.com/originals/c7/43/9f/c7439f34ba71280a1300d3329b093ee1.png" alt="logo" className='login--logo'/>
        <div className='loginSystem'>
            <label className='loginSystem--user' onInput={ e => { return  userLogin = e.target.value  } }>Usuario</label>
            <input className='loginSystem--user__input' type="text"/>
            <label className='loginSystem--password' onInput={ e => { return userPassword = e.target.value  } }>Password</label>
            <input className='loginSystem--password__input' type="text" />
            <p className='loginSystem--register'>¿No estas registrado? <Link to="/register"><span>Regístrate</span></Link></p>
            <Link to="/menu">
              <button className='loginSystem--login' type='Button' onClick={ e => Users.filter( e => e.idUser === userLogin && e.password === userPassword)}>Login</button>
            </Link>
        </div>
    </div>
  )
}

export default Login