import React from 'react'
import Letter from './alphabet/LetterItem'

export default function GameSpace(props) {


    // let blocks = ["A", "ASDASdasdasd", "C", "D", "E"]
    //let blocks = props.blocks.map((item) => item.value);

    let letterComponents = props.blocks.map((item, i) => < Letter key={i} hide={item.hide} letter={item.value} />)

    for (let i = 0; i < letterComponents.length; i++) {

        let swapNum = Math.floor((Math.random() * (letterComponents.length - i)) + i)
        let temp = letterComponents[swapNum]

        letterComponents[swapNum] = letterComponents[i]
        letterComponents[i] = temp;
    }

    return (
        <div className="maingame">
            {letterComponents}
        </div>
    )
}
