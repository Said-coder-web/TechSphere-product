import { memo } from "react"
import { useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import imagePhone from "../../assets/phone.webp"
import imageLabtop from "../../assets/labtop.webp"
import imageTaplet from "../../assets/taplet.webp"
import imageSmartwatch from "../../assets/smartWatch.webp"

import "./categories.css"

export default memo(function Categorys() {
  const toPage = useNavigate()

  const categories = [
    { name: 'Smart Phones', image: imagePhone, path: '/phones' },
    { name: 'Taplets', image: imageTaplet, path: '/taplets' },
    { name: 'Watches', image: imageSmartwatch, path: '/watches' },
    { name: 'Laptops', image: imageLabtop, path: '/laptops' },
  ]

  return (
    <section className="categorys pt-[30px]">
      <div className="container bg-blur overflow-hidden p-[20px] flex items-center min-xl:justify-between max-xl:flex-col gap-[20px] max-xl:gap-[10px]">
        <div className="info-categorys grid gap-[5px] max-xl:text-center">
          <h2 className="text-2xl">Shop By Category</h2>
          <h3 className="font-[300]">Fine Your Perfect Device</h3>
        </div>

        <div className="categorys-content grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] flex-1 items-center gap-[20px] max-xl:w-full">
          {
            categories.map((item, i) => (
              <button
                key={i}
                className="category bg-blur overflow-hidden p-[15px]"
                onClick={() => toPage(item.path)}
              >
                <img src={item.image} alt="image-category" className="w-full" />
                <h4 className="flex items-center justify-between mt-[10px] max-xl:text-[12px]">
                  <span>{item.name}</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </h4>
              </button>
            ))
          }
        </div>
      </div>
    </section>
  )
})