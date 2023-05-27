import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from './components/Error'
import Productinfo from './components/Productinfo'
import Products from './components/Products'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="*" element={<Error />} />
                <Route path="//:id" element={<Productinfo />} />
            </Routes>
        </>
    )
}

export default Routing