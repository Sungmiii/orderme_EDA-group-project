import React from 'react'

import { connect } from 'react-redux'

import { getLevles } from './api_client/orderme_api'

import { resetComplete, clearGoals, dropItem } from '../actions'

import GameSpace from './GameSpace'
import Header from './Header'
import Footer from './Footer'
import AnswerBox from './AnswerBox'
import Letter from './alphabet/LetterItem'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: [],
      resetGame: false,
      goal: []
    }

    this.resetGame = this.resetGame.bind(this)
  }

  componentDidMount(evt) {
    // evt.preventDefault()
    console.log('App componentDidMount')
    getLevles()
      .then(leveles => {
        let goal = Array(leveles.game.length)
        goal = goal.fill(-1)
        this.setState({
          level: leveles.game,
          goal: goal
        })
      })
    this.drop = this.drop.bind(this)
    this.dragOver = this.dragOver.bind(this)
  }

  componentWillReceiveProps(nextProps) {


    if (nextProps.resetGame) {
      let goal = Array(this.state.goal.length)
      goal = goal.fill(-1)

      this.props.dispatch(clearGoals(goal))

      this.setState({ goal: goal })

      this.resetGame();
    }

  }

  resetGame() {
    this.props.dispatch(resetComplete())
  }

  drop(e, target) {
    e.preventDefault();
    // console.log(name + " got given " + e.dataTransfer.getData("id"))

    let dropped = this.state.level.find(
      (item) => {
        console.log("tiem is ", item)
        return item.value == e.dataTransfer.getData("id")
      }
    )

    console.log("dropped is", dropped)

    this.props.dispatch(dropItem(target, dropped.id))
  }

  dragOver(e) {
    e.preventDefault()
  }

  render() {
    let answers = new Array(26);

    answers = answers.fill(1);

    answers = answers.map((item, i) => {


      // let thing = (this.props.goal[i] > -1) ? (this.state.level[this.props.goal[i]]) : null;
      let thing = this.state.level[this.props.goal[i] - 1];

      if (thing == undefined) {
        thing = null;
      }
      else {
        thing = thing.value
      }
      console.log("thing is ", thing, this.state.level[i], this.props.goal[i])

      // console.log("is " + i)
      return (
        <span onDragOver={this.dragOver} onDrop={(e) => this.drop(e, i)}>
          {thing ? <div style={{ display: "inline-block" }}>< Letter hide={false} letter={thing} /> </div> : <AnswerBox />}
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


function mapStateToProps(state) {
  return {
    resetGame: state.reset,
    goal: state.goals
  }
}

export default connect(mapStateToProps)(App)

