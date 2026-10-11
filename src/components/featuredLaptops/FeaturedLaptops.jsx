import { Fragment, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../redux/cart/cartActions"
import { fetchLaptops } from "../../redux/getLaptops/getLaptopsActions"

import TitelItems from "../titleItems/TitelItems"
import Card from "../card/Card"
import Loading from "../loading/Loading"

import "./featuredLaptops.css"

const FeaturedLaptops = () => {
  const toPage = useNavigate()
  const { loading, data, error } = useSelector(state => state.laptops)
  const dispatch = useDispatch()
  const shouldLog = useRef(true)
  const dataLaptops = data?.products?.slice(0, 4) ?? []

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false
      dispatch(fetchLaptops())
    }
  }, [dispatch])

  return (
    <>
      {loading && <Loading />}
      {!loading && error && <p>Error: {error}</p>}
      {!loading && data && (
        <section className="featured pt-[30px]">
          <div className="container">
            <TitelItems text={'Featured Laptops'} show={true} action={() => toPage('/laptops')} />

            <div className="featured-content grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[20px]">
              {
                dataLaptops.map(item => (
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

export default FeaturedLaptops