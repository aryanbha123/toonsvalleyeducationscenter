import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ wrappedComponents }) {
    return (
        <>
            <Header />
            {wrappedComponents}
            <Footer />
        </>
    )
}
