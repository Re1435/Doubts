import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const deleteHistory = () => {
    deleteItem(id)
  }
  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="logo" alt="domain logo" />
      <p className="title">{title}</p>
      <p className="domain-link">{domainUrl}</p>
      <button className="delete-button" type="button" onClick={deleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
