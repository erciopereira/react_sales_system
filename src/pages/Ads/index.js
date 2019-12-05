import React, { useState, useEffect } from 'react'
import { PageArea } from './styled'
import { Link } from 'react-router-dom'

import { PageContainer } from '../../components/MainComponents'
import useApi from '../../helpers/API'
import AdItem from '../../components/partials/AdItem'

const Page = () => {
    const api = useApi()

    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([])
    const [adList, setAdList] = useState([])

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates()
            setStateList(slist)
        }
        getStates()
    }, [])

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories()
            setCategories(cats)
        }
        getCategories()
    }, [])

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 20
            })
            setAdList(json.ads)
        }
        getRecentAds()
    }, [])

    return (
        <PageContainer>
            <PageArea>
                <div className="leftSide">
                    <form method="GET">
                        <input type="text" name="q"/>
                        <div className="titleName">Estado:</div>
                        <select name="state">
                            <option></option>
                            {stateList.map((i,k)=>
                                <option key={k} value={i.name}>{i.name}</option>
                            )}
                        </select>
                        <div className="titleName">Categoria:</div>
                        <ul>
                            {categories.map((i,k)=>
                                <li key={k} className="categoryItem">
                                    <img src={i.img} alt=""/>
                                    <span>{i.name}</span>
                                </li>
                            )}
                        </ul>
                    </form>
                </div>
                <div className="rightSide">
                    ...
                </div>
            </PageArea>
        </PageContainer>


    )
}

export default Page