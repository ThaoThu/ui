import React from 'react'
import FormSwap from './components/FormSwap'
import Info from './components/Info'
import Pros from './components/Pros'
import './swap.scss'

export default function Swap() {
    return (
        <div className='swap-container'>
            <Info />
            <FormSwap />
            <Pros />
        </div>
    )
}
