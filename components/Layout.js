import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
    const { children } = props
    return (
        <div className="flex min-h-screen justify-center">
            <div className="p-4 max-w-[600px]">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}
