import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Letter from './alphabet/A'

export default function GameSpace() {
    return (
        <div className="maingame">
            <Header />
            <Letter class="letterBlock" />
            <Footer />
        </div>
    )
}
