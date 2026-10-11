import { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSlider } from '../../redux/getProductSlider/getProductSliderActions'

import TitelItems from '../../components/titleItems/TitelItems'
import Loading from '../../components/loading/Loading'
import Card from '../../components/card/Card'
import { addToCart } from '../../redux/cart/cartActions'

const PhonePage = () => {
  const { loading, data, error } = useSelector(state => state.slider)
  const dispatch = useDispatch()
  const shouldLog = useRef(true)

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false
      dispatch(fetchSlider())
    }
  }, [dispatch])
  // console.log(data.products);

  return (
    <main className='phone-page py-[30px]'>
      <div className="container">
        <TitelItems text={'Phones'} />

        <div className="cards  grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[20px]">
          {loading && <Loading />}
          {!loading && error && <p>Error: {error}</p>}

          {!loading && data && (
            <>

              {
                data.products?.map(item => (
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
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default PhonePage