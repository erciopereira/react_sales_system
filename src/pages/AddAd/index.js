import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { PageArea } from './styled'
import { PageContainer, ErrorMessage } from '../../components/MainComponents'
import useApi from '../../helpers/API'


const Page = () => {

    const api = useApi()
    const fileField = useRef()
    const history = useHistory()

    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [princeNegotiable, setPriceNegotiable] = useState(false)
    const [desc, setDesc] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories()
            setCategories(cats)
        }
        getCategories()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError('')
        let errors = []

        if (!title.trim()) {
            errors.push('Sem título')
        }

        if (!category) {
            errors.push('Sem categoria')
        }

        if (errors.length === 0) {
            const fData = new FormData()
            fData.append('title', title)
            fData.append('price', price)
            fData.append('priceneg', princeNegotiable)
            fData.append('desc', desc)
            fData.append('cat', category)

            if (fileField.current.files.length > 0) {
                for (let i = 0; i < fileField.current.files.length; i++) {
                    fData.append('img', fileField.current.files[i])
                }
            }

            const json = await api.addAd(fData)

            if (!json.error) {
                console.log(fData)
                history.push(`/ad/${json.id}`)
                return
            } else {
                setError(json.error)
            }

        } else {
            setError(errors.join("\n"))
        }

        setDisabled(false)


    }

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    })

    return (
        <PageContainer>
            {error &&
                <ErrorMessage>{error}</ErrorMessage>
            }
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <span className="title">Postar Anúncio</span>
                    <label className="area">
                        <div className="area--input">
                            <input
                                type="text"
                                placeholder="Titulo"
                                disabled={disabled}
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <select className="stateLoc"
                                disabled={disabled}
                                onChange={e => setCategory(e.target.value)}
                                required
                            >
                                <option>Categoria</option>
                                {categories && categories.map(i =>
                                    <option key={i._id} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <MaskedInput
                                mask={priceMask}
                                Placeholder="R$ "
                                disabled={disabled || princeNegotiable}
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <input id="ckb1"
                                type="checkbox"
                                className="checkbox"
                                disabled={disabled}
                                checked={princeNegotiable}
                                onChange={() => setPriceNegotiable(!princeNegotiable)}
                            />
                            <label className="negotiable" htmlFor="ckb1">Preço Negociável</label>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <textarea
                                placeholder="Descrição"
                                disabled={disabled}
                                onChange={e => setDesc(e.target.value)}
                            >
                            </textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <input
                                type="file"
                                disabled={disabled}
                                ref={fileField}
                                multiple
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--input">
                            <button disabled={disabled}>Anunciar</button>
                        </div>
                    </label>
                </form>
                <div className="imgAd">

                </div>
            </PageArea>
        </PageContainer>
    )
}

export default Page