import React from 'react'
import Letter from './alphabet/LetterItem'

export default function GameSpace(props) {


    // let blocks = ["A", "ASDASdasdasd", "C", "D", "E"]
    let blocks = props.blocks.map((item) => item.value);

    let letterComponents = blocks.map((item, i) => < Letter key={i} letter={item} />)

    return (
        <div className="maingame">
            {letterComponents}
        </div>
    )
}
