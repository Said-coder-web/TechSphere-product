import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './titleItems.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TitelItems = ({ text, action, show }) => {
  return (
    <div className='titel flex items-center justify-between'>
      <h2 className="text-[1.5rem] mb-[15px]">{text}</h2>
      {
        show && (
          <button className='flex items-center gap-[10px]' onClick={action}>
            <span className='border-b border-dashed border-gray-300'>View All</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )
      }
    </div>
  )
}

export default TitelItems