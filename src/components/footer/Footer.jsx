import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import logo from '../../assets/icon-logo2.png'

import './footer.css'
import NavLinks from '../navLinks/NavLinks'

const Footer = () => {
  return (
    <footer className='py-[100px_20px] max-md:py-5 max-md:rounded-[20px]'>
      <div className="container flex gap-25 max-md:flex-col max-md:items-center max-md:gap-5">
        <div className="left">
          <div className="logo flex items-center gap-1.25">
            <img src={logo} alt="logo-icon" />
            <h1 className='text-[1.5rem]'>
              <span className='font-[600]'>Tech</span>
              <span>Sphere</span>
            </h1>
          </div>

          <div className="social flex items-center gap-[10px] text-[1.5rem] max-md:justify-center">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} className='text-white'/></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className='text-white'/></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} className='text-white'/></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} className='text-white'/></a>
          </div>
        </div>

        <NavLinks />
      </div>
    </footer>
  )
}

export default Footer