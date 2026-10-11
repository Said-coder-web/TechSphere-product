import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./contactMe.css"
import { faAt, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const ContactMe = () => {
  return (
    <section className="contact-me py-[50px]">
      <div className="container relative max-xl:flex max-xl:items-center max-md:flex-col max-md:gap-[20px]">
        <div className="left grid gap-[10px] w-[400px] max-md:text-center">
          <h2 className="text-[2.5rem]">Contact Me</h2>
          <p className="text-sm">We are committed processing the information in order to contact you and talk about your prroject</p>
          <ul className="info grid gap-[20px]">
            <li className="flex items-center gap-[5px] max-md:justify-center">
              <FontAwesomeIcon icon={faAt} className="text-xl"/>
              <span>sydm567@gmail.com</span>
            </li>
            <li className="flex items-center gap-[5px] max-md:justify-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-xl"/>
              <span>11 Street, behind the Old Post Office</span>
            </li>
            <li className="flex items-center gap-[5px] max-md:justify-center">
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl"/>
              <span>+201155749023</span>
            </li>
          </ul>
        </div>

        <div className="right bg-blur flex flex-col gap-[10px] w-[400px] p-[20px]">
          <h3 className="text-[2rem]">Say something</h3>
          <input type="text" name="name" placeholder="Enter Your Name..." className="bg-blur w-full p-[10px] text-sm outline-none" />
          <input type="email" name="email" placeholder="Enter Your Email..." className="bg-blur w-full p-[10px] text-sm outline-none" />
          <textarea name="message" placeholder="Enter Message..." className="bg-blur w-full p-[10px] text-sm h-[200px] resize-none outline-none"></textarea>
          <button className="bg-blur overflow-hidden w-full py-[10px] ">Send</button>
        </div>
      </div>
    </section>
  )
}

export default ContactMe