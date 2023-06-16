const NavBar = props => {
    const {timer, score} = props
  
    return (
      <nav className="nav-bar-container">
        <div className="title-with-score-container">
          <div className="logo-and-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
              className="website-logo-img"
            />
          </div>
          <div className="timer-score-container">
            <p className="score">
              Score: <span className="count">{score}</span>
            </p>
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-img"
              />
              <p className="timer">{timer} sec</p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  export default NavBar
  