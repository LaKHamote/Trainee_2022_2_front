import React, { useState } from 'react'
import { useUserContext } from '../context/useUserContext'

const LoginPage = () => {
    const [loginParams, setLoginParams] = useState({})

    const { login } = useUserContext();

    const onSubmit = (e) => {
        e.preventDefault();
        login(loginParams)
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Email"
            onChange={
                (e) => setLoginParams({...loginParams, email: e.target.value})
            }
        />
        <input type="password" placeholder="Senha"
            onChange={
                (e) => setLoginParams({...loginParams, password: e.target.value})
            }
        />
        <button type="submit">Entrar</button>
    </form>
  )
}

export default LoginPage