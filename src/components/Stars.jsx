import { faStar as faStarSolid, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Stars = ({ rating }) => {
  const roundedRating = +rating.toFixed(1)
  const fullStars = Math.floor(roundedRating)
  const halfStar = roundedRating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <div className="rate text-sm flex items-center gap-1.25">
      <div className="stars">
        {
          Array.from({ length: fullStars }).map((_, i) => (
            <FontAwesomeIcon key={`full-${i}`} icon={faStarSolid} className='text-yellow-400' />
          ))
        }
        {halfStar && <FontAwesomeIcon icon={faStarHalfStroke} className='text-yellow-400' />}
        {
          Array.from({length: emptyStars}).map((_, i) => (
            <FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} className='text-yellow-400'/>
          ))
        }
      </div>
      <span className='text-gray-200'>({rating.toFixed(1)})</span>
    </div>
  )
}

export default Stars