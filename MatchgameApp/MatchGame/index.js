import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {imagesList, tabsList} = props
    this.state = {
      timer: 60,
      score: 0,
      matchImg: imagesList[0],
      activeTabId: tabsList[0].tabId,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.onTimerDecrement, 1000)
  }

  getFilteredThumbnailsList = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props
    const filteredThumbnails = imagesList.filter(
      eachItem => eachItem.category === activeTabId,
    )
    return filteredThumbnails
  }

  displayScoreBoard = () => {
    const {score} = this.state
    return (
      <div className="scoreboard-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          className="trophy-img"
          alt="trophy"
        />
        <h1 className="score-text">YOUR SCORE</h1>
        <h1 className="score">{score}</h1>
        <button
          className="play-btn"
          type="button"
          onClick={this.onClickPlayAgain}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-img"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  }

  onClickPlayAgain = () => {
    this.setState({
      timer: 60,
      score: 0,
    })
  }

  onClickImg = id => {
    const {matchImg} = this.state
    const {imagesList} = this.props
    const randomList =
      imagesList[Math.ceil(Math.random() * imagesList.length - 1)]
    if (id === matchImg.id) {
      this.setState(prevState => ({
        matchImg: randomList,
        score: prevState.score + 1,
      }))
    } else {
      this.displayScoreBoard()
    }
  }

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  onTimerDecrement = () => {
    this.setState(prevState => ({
      timer: prevState.timer - 1,
    }))
  }

  render() {
    const {activeTabId, matchImg, timer, score} = this.state
    const {tabsList} = this.props
    const filteredThumbnailsList = this.getFilteredThumbnailsList()

    return (
      <div className="app-container">
        <ul className="navbar-container">
          <NavBar score={score} timer={timer} />
        </ul>
        <div className="match-img-container">
          <img src={matchImg.imageUrl} alt="match" className="match-img" />
        </div>
        
        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              updateActiveTabId={this.updateActiveTabId}
              isActive={tabDetails.tabId === activeTabId}
            />
          ))}
        </ul>

        <div className="thumbnail-container">
          <ul className="thumbnail-list-container">
            {filteredThumbnailsList.map(eachItem => (
              <ThumbnailItem
                key={eachItem.id}
                thumbnailDetails={eachItem}
                onClickImg={this.onClickImg}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MatchGame
