import React from 'react'

import { getLevles } from './api_client/orderme_api'

import GameSpace from './GameSpace'
import Header from './Header'
import Footer from './Footer'
import AnswerBox from './AnswerBox'

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
          level: leveles.game
        })
      })
  }

  render() {
    let answers = new Array(26);

    answers = answers.fill(1);

    answers = answers.map((item, i) => {
      console.log("is " + i)
      return (
        <span  onDragOver={dragOver} onDrop={(e) => drop(e, "Box" + i)}>
          <AnswerBox />
        </span>
      )

    })


    return (
      <div className="gridcontainer">
        <Header />
        <div className="answerbox">
          {answers}
        </div>
        <GameSpace blocks={this.state.level} />
        <Footer />
      </div>
    )
  }
}

function drop(e, name) {
  e.preventDefault();
  console.log(name + " got given " + e.dataTransfer.getData("id"))
}

function dragOver(e) {
  e.preventDefault()
}



export default App

