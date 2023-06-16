import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickActivateTabId = () => {
    updateActiveTabId(tabId)
  }

  const isActiveTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        className={`tab-btn ${isActiveTabClassName}`}
        type="button"
        onClick={onClickActivateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
