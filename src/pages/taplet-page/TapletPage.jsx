import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cart/cartActions'
import { fetchTaplets } from '../../redux/getTaplets/tapletsAction'

import TitelItems from '../../components/titleItems/TitelItems'
import Loading from '../../components/loading/Loading'
import Card from '../../components/card/Card'

function TapletPage() {
  const { loading, data, error } = useSelector(state => state.taplets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTaplets())
  }, [dispatch])

  return (
    <main className='taplet-page my-[30px]'>
      <div className="container">
        <TitelItems text={'Taplets'} />

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

export default TapletPage