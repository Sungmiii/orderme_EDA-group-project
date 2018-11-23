import React from 'react'
import Letter from './alphabet/LetterItem'

export default function GameSpace(props) {


    // let blocks = ["A", "ASDASdasdasd", "C", "D", "E"]
    //let blocks = props.blocks.map((item) => item.value);

    let letterComponents = props.blocks.map((item, i) => < Letter key={i} hide={item.hide} letter={item.value} />)


    return (
        <div className="maingame">
            {letterComponents}
        </div>
    )
}
