import React from 'react'

import OrdermeLogo from './OrdermeLogo'
import MenuBtn from './MenuBtn'
import ResetBtn from './ResetBtn'

export default function Header() {
    return (
        <header>
            <div className="menubtn">
                <MenuBtn />
            </div>
            <div className="logogog">
            <OrdermeLogo />
            </div>
            <div className="resetbtn">
                <ResetBtn />
            </div>
        </header>
    )
}
