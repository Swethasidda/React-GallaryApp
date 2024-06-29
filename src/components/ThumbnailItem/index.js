// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, clickImageItem, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList
  const onClickImageItem = () => {
    clickImageItem(id)
  }

  const activeButtonClassNmae = isActive ? 'activeimagebutton' : ''

  return (
    <li className="each-Item">
      <button
        type="button"
        className={`button ${activeButtonClassNmae}`}
        onClick={onClickImageItem}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
