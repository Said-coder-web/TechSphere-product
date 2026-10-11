import { Fragment, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchSlider } from "../../redux/getProductSlider/getProductSliderActions"
import { addToCart } from "../../redux/cart/cartActions"

import TitelItems from "../titleItems/TitelItems"
import Card from "../card/Card"
import Loading from "../loading/Loading"

import "./featuredSmartphones.css"

const FeaturedSmartphones = () => {
  const toPage = useNavigate()
  const { loading, data, error } = useSelector(state => state.slider)
  const dispatch = useDispatch()
  const shouldLog = useRef(true)
  const dataPhone = data?.products?.slice(0, 4) ?? []

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false
      dispatch(fetchSlider())
    }
  })

  return (
    <>
      {loading && <Loading />}
      {!loading && error && <p>Error: {error}</p>}
      {!loading && data && (
        <section className="featured pt-[30px]">
          <div className="container">
            <TitelItems text={'Featured Smartphones'} show={true} action={() => toPage('/phones')} />

            <div className="featured-content grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[20px]">
              {
                dataPhone.map(item => (
                  <Fragment key={item.id}>
                    <Card
                      id={item.id}
                      name={item.title}
                      image={item.images?.[1] ?? item.thumbnail}
                      imageHover={item.images?.[0] ?? item.thumbnail}
                      warranty={item.warrantyInformation} rating={item.rating}
                      price={item.price}
                      action={() => dispatch(addToCart(item))}
                    />
                  </Fragment>
                ))
              }
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default FeaturedSmartphones