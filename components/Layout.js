import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
    const { children } = props
    return (
        <div className="p-2">
            <Header />
            <main className="px-0 sm:px-[15%]">{children}</main>
            <Footer />
        </div>
    )
}
