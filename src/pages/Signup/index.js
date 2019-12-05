import React, { useState, useEffect } from 'react'
import { PageArea } from './styled'
import useApi from '../../helpers/API'
import { doLogin } from '../../helpers/AuthHandler'
import { PageContainer, ErrorMessage } from '../../components/MainComponents'


const Page = () => {

    const api = useApi()

    const [name, setName] = useState('')
    const [stateLoc, setStateLoc] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [stateList, setStateList] = useState([])

    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates()
            setStateList(slist)
        };
        getStates()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError('')

        if (password !== confirmPassword) {
            setError('Senhas diferem uma da outra!')
            setDisabled(false)
            return
        }

        const json = await api.register(name, email, password, stateLoc)

        if (json.error) {
            setError(json.error)
        } else {
            doLogin(json.token)
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
                    <span className="title">Cadastro</span>
                    <label className="area">
                        <div className="area--input">
                            <input
                                type="text"
                                placeholder="Nome Completo"
                                disabled={disabled}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <select
                                className="stateLoc"
                                value={stateLoc}
                                onChange={e => setStateLoc(e.target.value)}
                                required
                            >
                                {stateList.map((i, k) =>
                                    <option key={k} value={i._id}>{i.name}</option>)}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <input
                                type="email"
                                placeholder="E-mail"
                                disabled={disabled}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
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
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <input
                                type="password"
                                placeholder="Confirmar Senha"
                                disabled={disabled}
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
                <div className="imgCadastre"></div>
            </PageArea>
        </PageContainer>
    )
}

export default Page