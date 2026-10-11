import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import './card.css'
import Stars from "../Stars"
import toast from "react-hot-toast"

const Card = ({ id, name, image, imageHover, warranty, rating, price, action }) => {
  const [isHovered, setIsHovered] = useState(false)
  const toPage = useNavigate()

  const handelAddToCart = (e) => {
    e.stopPropagation()
    action()
    toast.success('Product added to cart successfully', {
      duration: 3000,
      style: {background: "#4BB543", color: "#fff"}
    }, {
      id: `cart-${id}`
    })
  }
  return (
    <article
      className="bg-blur overflow-hidden p-[15px] relative grid gap-[5px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => toPage(`/product/${id}`)}
    >
      <button className="save absolute right-[15px] top-[10px] text-[1.25rem] z-40">
        <FontAwesomeIcon icon={faHeart} />
      </button>

      <div className="image relative w-full">
        <img src={image} alt="image-card" className={`w-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
        <img src={imageHover} alt="image-card" className={`w-full mx-auto absolute top-0 left-0 transition-opacity duration-300 ${isHovered ? "opacity-100 " : "opacity-0"}`} />
      </div>
      <h3 className="font-[600]  text-white">{name}</h3>
      <Stars rating={rating} />
      <h4 className="text-sm opacity-60">{warranty}</h4>
      <div className="price text-blue-700 text-xl font-[600]">${price}</div>
      <button onClick={handelAddToCart} className="add-car bg-blur overflow-hidden w-fit ml-auto mr-0 py-[8px] px-[16px] text-sm font-[300] flex items-center gap-[5px] text-blue-800">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Add to Car</span>
      </button>
    </article>
  )
}

export default Card