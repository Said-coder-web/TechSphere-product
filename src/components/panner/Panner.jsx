import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import imagePanner from "../../assets/imagePanner.png"

import './panner.css'

const Panner = () => {
  return (
    <section className='panner pt-[30px]'>
      <div className="container bg-blur overflow-hidden">
        <div className="panner-content p-[20px] flex items-center">
          <div className="panner-info flex flex-col gap-[10px] w-[70%]  text-blue-900">
            <h2 className='text-[2rem] font-[500]'>Trade-In & Save</h2>
            <p>Upgrade to latest. Get up to $6000 for your old device.</p>
            <button className='bg-blur overflow-hidden w-fit py-[10px] px-[20px] flex items-center gap-[5px]'>
              <span>Learn More</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <img src={imagePanner} alt="image-panner" className='absolute top-[50%] translate-y-[-50%] right-[30px] w-[400px]  max-xl:w-[300px] max-xl:right-[10px]'/>
        </div>
      </div>
    </section>
  )
}

export default Panner