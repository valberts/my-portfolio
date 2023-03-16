import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
    const { children } = props
    return (
        <div className="flex min-h-screen justify-center">
            <div className="px-[25%] p-2">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}
