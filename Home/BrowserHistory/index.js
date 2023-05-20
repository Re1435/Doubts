import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = this.props
    this.state = {
      searchInput: '',
      historyList: initialHistoryList,
    }
  }

  onChangeSearchInput = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  deleteItem = id => {
    const {historyList} = this.state
    const filterHistory = historyList.filter(each => each.id !== id)
    this.setState({historyList: filterHistory})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="history-bar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-img"
          />
          <div className="history-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              className="search-input"
              placeholder="Search history"
              value={searchInput}
            />
          </div>
        </div>
        {}
        <div className="history-container">
          <ul className="history-list-container">
            {searchResults.map(each => (
              <HistoryItem
                historyDetails={each}
                key={each.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
