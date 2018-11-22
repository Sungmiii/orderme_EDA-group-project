import React from 'react'
import request from 'superagent'

import GameSpace from './GameSpace'
import { getLevles } from './api_client/orderme_api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: []
    }
  }

  componentDidMount(evt) {
    // evt.preventDefault()
    console.log('App componentDidMount')
    getLevles()
      .then(leveles => {
        this.setState({
          level: leveles
        })
      })
  }
  render() {
    return (
      <div style={{ position: "absolute" }}>
        <h1>React development has begun!</h1>

        <p id="redBox" style={{ position: "absolute", top: "100px", left: "400px", background: 'red', width: "100px", height: "100px" }} draggable="true" onDragEnd={dropped} onMouseMove={mouseMove} onDrop={dragDrop} onDrag={aFunction}>a</p>

        <GameSpace />
      </div>
    )
  }
}


var xpos = Math.floor(Math.random() * 500);

var ypos = Math.floor(Math.random() * 500);

function aFunction(event) {
  // console.log(event.clientX)
  ypos = event.clientX;
  xpos = event.clientY;
}

function dropped(event) {
  console.log("dropped at x" + xpos + " y" + ypos)

  document.getElementById("redBox").style["left"] = event.clientX + "px";
  document.getElementById("redBox").style["top"] = event.clientY + "px";
}

function mouseMove(event) {
  // console.log("mouse move ", event.clientX)

}

function dragDrop(event) {
  // console.log('dragDrop', event.clientX)
}

export default App

