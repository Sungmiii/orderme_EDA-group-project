import React from 'react'

import OrdermeLogo from './OrdermeLogo'
import MenuBtn from './MenuBtn'
import ResetBtn from './ResetBtn'

export default function Header() {
    return (
        <div>
            <div className="menubtn">
                <MenuBtn />
            </div>

            <OrdermeLogo />
            <div className="resetbtn">
                <ResetBtn />
            </div>
        </div>
    )
}
