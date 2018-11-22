import React from 'react'

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
      <div style={{ position: "absolute" }} className="gridcontainer">
        <h1>React development has begun!</h1>

        <p id="redBox" style={{ position: "absolute", top: "100px", left: "400px", background: 'red', width: "100px", height: "100px" }} draggable="true" onDragEnd={dropped} onMouseMove={mouseMove} onDrop={dragDrop} onDrag={aFunction}>a</p>

        <GameSpace />
      </div>
    )
  }
}





export default App

