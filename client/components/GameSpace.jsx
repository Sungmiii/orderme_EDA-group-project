import React from 'react'
import Letter from './alphabet/LetterItem'

export default function GameSpace() {


    let blocks = ["A", "ASDASdasdasd", "C", "D", "E"]

    let items = blocks.map((item, i) => < Letter key={i} letter={item} />)

    return (
        <div className="maingame">
            {items}
        </div>
    )
}
