import React from 'react'

import A from './A'
import B from './B'
import C from './C'
import D from './D'
import E from './E'
import F from './F'
import G from './G'
import H from './H'
import I from './I'
import J from './J'
import K from './K'
import L from './L'
import M from './M'
import N from './N'
import O from './O'
import P from './P'
import Q from './Q'
import R from './R'
import S from './S'
import T from './T'
import U from './U'
import V from './V'
import W from './W'
import X from './X'
import Y from './Y'
import Z from './Z'


const getElement = {
  A: <A className="letterBlock" />, B: <B className="letterBlock" />, C: <C className="letterBlock" />, D: <D className="letterBlock" />,
  E: <E className="letterBlock" />, F: <F className="letterBlock" />, G: <G className="letterBlock" />, H: <H className="letterBlock" />,
  I: <I className="letterBlock" />, J: <J className="letterBlock" />, K: <K className="letterBlock" />, L: <L className="letterBlock" />,
  M: <M className="letterBlock" />, N: <N className="letterBlock" />, O: <O className="letterBlock" />, P: <P className="letterBlock" />,
  Q: <Q className="letterBlock" />, R: <R className="letterBlock" />, S: <S className="letterBlock" />, T: <T className="letterBlock" />,
  U: <U className="letterBlock" />, V: <V className="letterBlock" />, W: <W className="letterBlock" />, X: <X className="letterBlock" />,
  Y: <Y className="letterBlock" />, Z: <Z className="letterBlock" />
}



function dropped(e, letter) {
  e.preventDefault();
  console.log("item dropped on " + letter + " is " + e.dataTransfer.getData("id"))
}

function dragOver(e) {
  e.preventDefault();
}

function dragStart(e, letter) {
  e.dataTransfer.setData("id", letter)
}



const LetterItem = props => {

  let item = getElement[props.letter.toUpperCase()]
  if (item && !props.hide) {
    return (
      <div className="draggableBox" draggable="true" onDrop={(e) => dropped(e, props.letter)} onDragOver={dragOver} onDragStart={(e) => dragStart(e, props.letter)}>
        {item}
      </div >
    )
  }
  else {
    return null
  }
}

export default LetterItem
