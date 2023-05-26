// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, displayOnGallery} = props
  const {imageUrl, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const onDisplayImg = () => {
    displayOnGallery(imageUrl)
  }

  return (
    <li className="thumbnail-item">
      <button className="display-btn" type="button" onClick={onDisplayImg}>
        <img
          src={thumbnailUrl}
          className="thumbnail-img"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
