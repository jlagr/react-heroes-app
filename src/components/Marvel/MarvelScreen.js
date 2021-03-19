import React from 'react'
import HerosList from '../heroes/HerosList'

export const MarvelScreen = () => {
    return (
        <>
            <h1>Marvel Comics</h1>
            <hr />
            <HerosList publisher="Marvel Comics"/>
        </>
    )
}
