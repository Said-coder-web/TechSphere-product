import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchsingleProduct } from "../../redux/getSingleproduct/singleProductAction"

import Loading from "../../components/loading/Loading"
import Stars from "../../components/Stars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { addToCart, decreaseQuantity, increaseQuantity } from "../../redux/cart/cartActions"

function SingleProduct() {
  const param = useParams()
  const { loading, data, error } = useSelector(state => state.singleProduct)
  const items = useSelector(state => state.cart.items)
  const [imageSelection, setImageSelection] = useState(null)
  const image = imageSelection?.productId === param.id
    ? imageSelection.src
    : data?.images?.[0]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchsingleProduct(param.id))
  }, [dispatch, param.id])

  const currQuantity = items.find(item => item.id === data.id) || []

  useEffect(() => {
    console.log(currQuantity.quantity);
  }, [items])


  return (
    <main className="single-page py-[30px]">
      <div className="container flex gap-[50px] max-md:flex-col">
        {loading && <Loading />}
        {!loading && error && <p>Error: {error}</p>}
        {!loading && data && (
          <>
            <div className="show-porduct min-md:w-[50%] flex flex-col gap-[20px] max-md:order-2">
              <div className="main-image bg-blur p-[10px]">
                <img src={image} alt="main-image" />
              </div>

              <div className="chang-image flex items-center justify-center gap-[20px]">
                {
                  data.images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt="images"
                      className="w-[100px] bg-blur p-[10px] cursor-pointer"
                      onClick={() => setImageSelection({ productId: param.id, src: image })}
                    />
                  ))
                }
              </div>
            </div>
            <div className="about-broduct min-md:w-[50%] flex flex-col max-md:order-1">
              <div className="title pb-[20px] flex flex-col gap-[5px] border-b border-[#eeeeee75]">
                <h1 className="text-[1.75rem]">{data.title}</h1>
                <p className="text-[14px]">{data.description}</p>
                <Stars rating={data.rating} />
              </div>

              <div className="price py-[20px] border-b border-[#eeeeee75] text-center">
                <h2 className="text-[3rem]">${data.price}</h2>
                <h3>{data.returnPolicy}</h3>
              </div>

              <div className="buying py-[20px] flex items-center justify-center gap-[20px]">
                <div className="count flex items-center w-fit bg-[#eeeeee75] rounded-lg">
                  <button className="w-[40px] h-[40px] text-center content-center" onClick={() => dispatch(decreaseQuantity(data.id))}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="w-[40px] h-[40px] text-center content-center text-blue-800">{currQuantity.quantity ?? 1}</span>
                  <button className="w-[40px] h-[40px] text-center content-center text-blue-800" onClick={() => dispatch(increaseQuantity(data.id))}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>

                <span className="text-[12px]">Only <span className="text-red-400">{data.stock} Items</span> Left! <br /> Don't miss it</span>
              </div>

              <button className="bg-blur py-[10px]" onClick={() => dispatch(addToCart(data))}>Add to Car</button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default SingleProduct