import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickImg} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickThumbnailBtn = () => {
    onClickImg(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnailBtn}
      >
        <img src={thumbnailUrl} className="thumbnail-img" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
