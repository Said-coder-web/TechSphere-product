import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './pageNotFound.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const [isHovered, setIsHovered] = useState(false)
  const toPage = useNavigate()
  return (
    <main className="not-found h-[100vh] flex justify-center items-center max-md:p-[10px]">
      <div className="container bg-blur p-[20px] flex justify-between items-center gap-[2.5rem] max-md:flex-col">
        <div className="info grid gap-[20px] max-md:order-2">
          <h1 className='text-[2rem]'>Page Not Found</h1>
          <button
            className='min-md:w-fit py-[10px] px-[20px] flex bg-blur overflow-hidden items-center justify-center gap-[5px]'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => toPage('/')}
          >
            <FontAwesomeIcon icon={faArrowLeft} className={`transition duration-300 ${isHovered ? '' : `rotate-[45deg]`}`}/>
            <span>Home</span>
          </button>
        </div>

        <div className="image rounded-[10px] flex-1 text-center max-md:w-full max-md:order-1">
          <h2 className='text-[15rem] max-sm:text-[10rem]'>404</h2>
        </div>
      </div>
    </main>
  )
}

export default PageNotFound