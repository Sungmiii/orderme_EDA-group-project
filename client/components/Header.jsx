import React from 'react'

import { connect } from 'react-redux'

import { resetGame } from '../actions/index'

import OrdermeLogo from './OrdermeLogo'
import MenuBtn from './MenuBtn'
import ResetBtn from './ResetBtn'

function Header(props) {
    return (
        <header>
            <div className="menubtn">
                <MenuBtn />
            </div>
            <div className="logogog">
                <OrdermeLogo />
            </div>
            <div className="resetbtn" onClick={() => gameReset(props.dispatch)}>
                <ResetBtn />
            </div>
        </header>
    )
}

function gameReset(dispatch) {
    console.log("reset clicked")
    dispatch(resetGame())
}


export default connect()(Header)