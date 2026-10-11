import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../redux/cart/cartActions"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"

import Stars from "../../components/Stars"

import "./cart.css"
import toast from "react-hot-toast"

const Cart = () => {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const toPage = useNavigate()

  const finalyPrice = (price, discountPercentage) => {
    return (price - (price * discountPercentage / 100)).toFixed(2)
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subTotal = items.reduce((sum, item) => sum + finalyPrice(item.price, item.discountPercentage) * item.quantity, 0).toFixed(2)
  const deliveryFee = 15
  const total = subTotal - deliveryFee

  const removeItem = (itemId, itemName) => {
    dispatch(removeFromCart(itemId))
    toast(`${itemName} Removed from cart`, {
      duration: 2000,
      style: {background: "#ef4444", color: "#fff"}
    })
  }

  return (
    <main className='cart py-7.5'>
      {items.length === 0 && (
        <div className="empty-cart flex flex-col items-center justify-center gap-5 h-[calc(100vh-440px)]">
          <p className="text-3xl">Looks like your cart is empty !</p>
          <button onClick={() => toPage("/")} className="bg-blur overflow-hidden p-2.5">Continue Shopping</button>
        </div>
      )}

      {items.length > 0 && (
        <>
          <div className={`container ${items.length === 0 ? "h-full" : ""}`}>
            <h1 className="text-5xl mb-5">Your Cart</h1>

            <div className={`content flex flex-wrap items-start gap-5`}>
              <section className="items grid gap-2.5 flex-1">
                {
                  items.map(item => (
                    <article key={item.id} className="bg-blur p-2.5 flex items-center gap-5 relative">
                      <div className="image w-30">
                        <img src={item.thumbnail} alt="image-product" />
                      </div>

                      <div className="info grid gap-1.25">
                        <h2 className="text-2xl">{item.title}</h2>
                        <Stars rating={item.rating} />
                        <div className="price flex items-end gap-1.25">
                          <span className="text-xl font-bold text-blue-700">${finalyPrice(item.price, item.discountPercentage)}</span>
                          <del className="text-[14px] opacity-70">${item.price}</del>
                        </div>
                      </div>

                      <button className="remove text-red-600 absolute right-2.5 top-2.5" onClick={() => removeItem(item.id, item.title)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>

                      <div className="inc-and-dec absolute bottom-2.5 right-2.5 flex items-center bg-[#eeeeee75] rounded-[20px]">
                        <button className="w-10 h-10 text-center content-center" onClick={() => dispatch(decreaseQuantity(item.id))}>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="w-10 h-10 text-center content-center text-blue-800">{item.quantity}</span>
                        <button className="w-10 h-10 text-center content-center text-blue-700" onClick={() => dispatch(increaseQuantity(item.id))}>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </article>
                  ))
                }
              </section>

              <section className="order-summary flex-1 bg-blur p-5">
                <h2 className="text-3xl font-bold">Order Summary</h2>

                <ul className="py-2.5 grid gap-2.5 border-b border-[#eeeeee75]">
                  <li className="flex items-center justify-between">
                    <span className="opacity-70">Subtotal</span>
                    <span>${subTotal}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="opacity-70">Total item</span>
                    <span>{totalItems}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="opacity-70">Delviry Fee</span>
                    <span>${deliveryFee}</span>
                  </li>
                </ul>

                <ul className="py-2.5">
                  <li className="flex items-center justify-between">
                    <span>Total</span>
                    <span>${total}</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default Cart