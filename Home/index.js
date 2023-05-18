// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onLogin = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const displayMessage = isLogin ? <Logout /> : <Login />
    return (
      <div className="app-container">
        <div className="message-container">
          <Message />
          <Login onLogin={this.onLogin} />
          {displayMessage}
        </div>
      </div>
    )
  }
}

export default Home
