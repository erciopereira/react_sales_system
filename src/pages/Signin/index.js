import React, { useState } from 'react'
import { PageArea } from './styled'
import { PageContainer, ErrorMessage } from '../../components/MainComponents'
import useApi from '../../helpers/API'
import { doLogin } from '../../helpers/AuthHandler'

const Page = () => {

    const api = useApi()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setDisabled(true)
        setError('')

         const json = await api.login(email,password)

         if(json.error){
            setError(json.error)
         }else{
            doLogin(json.token, rememberPassword)
            window.location.href = '/'
         }
         setDisabled(false)
    }

    return (
        <PageContainer>
        {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <span className="title">Login</span>
                    <label className="area">
                        <div className="area--input">
                            <input 
                                type="email"
                                placeholder="E-mail" 
                                disabled={disabled}
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                disabled={disabled}
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <input id="ckb1"
                            type="checkbox" 
                            className="checkbox" 
                            disabled={disabled}
                            checked={rememberPassword}
                            onChange={()=>setRememberPassword(!rememberPassword)}
                        />
                        <label className="remember" htmlFor="ckb1">Lembrar Senha</label>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page