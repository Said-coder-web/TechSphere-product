import { useDispatch, useSelector } from "react-redux"
import { memo, useEffect, useRef } from "react"
import { fetchSlider } from "../../redux/getProductSlider/getProductSliderActions"
import Loading from "../../components/loading/Loading"

// Swiper
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCamera, faMicrochip, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons"

// Styling
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./slider.css"

export default memo(function Slider() {
  const { loading, data, error } = useSelector(state => state.slider)
  const dispatch = useDispatch()
  const shouldLog = useRef(true)
  const appleDevices = data.products
  const appleDevicesFive = appleDevices?.filter(item => item.brand === 'Apple')

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false
      dispatch(fetchSlider())
    }
  }, [])

  return (
    <section className="pt-[40px]">
      <div className="container bg-blur">
        {
          <>
            {loading && <Loading />}
            {error && console.log('Error is:', error)}
            {!loading && data && (

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }}
              >
                {
                  appleDevicesFive?.map(item => (
                    <SwiperSlide key={item.id}>
                      <div className="info-silder flex items-start flex-col gap-[20px] w-[50%]">
                        <span className="new bg-blur py-[5px] px-[15px] text-sm">{item.availabilityStatus}</span>

                        <div className="info grid gap-[10px]">
                          <h2 className="text-4xl font-[600]">{item.title}</h2>
                          <h3 className="text-2xl font-[500]">{item.shippingInformation}</h3>
                          <p className="w-[350px] text-[12px] loading-[1.6]">{item.description}</p>
                        </div>

                        <button className="bg-blur overflow-hidden py-[15px] px-[25px] text-sm flex items-center gap-[5px]">
                          <span>Shop Now</span>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>

                        {/* <ul className="flex items-center">
                        <li className="pr-[20px] flex items-center gap-[10px]">
                          <FontAwesomeIcon icon={faCamera} className="py-[8px] px-[10px] text-2xl" />
                          <span className="text-[12px] font-[300]">Camera {item.camera}</span>
                        </li>
                        <li className="px-[20px] flex items-center gap-[10px]">
                          <FontAwesomeIcon icon={faMicrochip} className="py-[8px] px-[10px] text-2xl" />
                          <span className="text-[12px] font-[300]">{item.hardware}</span>
                        </li>
                        <li className="px-[20px] flex items-center gap-[10px]">
                          <FontAwesomeIcon icon={faMobileScreenButton} className="py-[8px] px-[10px] text-2xl" />
                          <span className="text-[12px] font-[300]">{item.screen_resolution}</span>
                        </li>
                      </ul> */}
                      </div>

                      <img src={item.images[2]} alt="image-phone" className="w-[400px] h-[400px]" />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            )}
          </>
        }
      </div>
    </section>
  )
})