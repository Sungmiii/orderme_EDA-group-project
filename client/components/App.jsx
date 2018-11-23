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
    return (
      <div className="gridcontainer">
        <Header />
        <div className="answerbox">
        <AnswerBox />
        <AnswerBox />
        <AnswerBox />
        </div>
        <GameSpace blocks={this.state.level} />
        <Footer />
      </div>
    )
  }
}





export default App

