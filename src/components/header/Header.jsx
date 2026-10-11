import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchSearch } from "../../redux/getSearch/searchAction"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCartShopping, faSearch, faBarsStaggered, faClose } from "@fortawesome/free-solid-svg-icons"

import useDebounce from "../../hooks/useDebounce"

import Logo from "../../assets/icon-logo2.png"
import NavLinks from "../navLinks/NavLinks"

import "./header.css"
import LoadingSpener from "../loadingSpener/LoadingSpener"

const Header = () => {
  const [nav, setNav] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const debounceTerm = useDebounce(searchTerm, 500)
  const { loading, data, error } = useSelector(state => state.search)
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const toPage = useNavigate()
  const filterCategory = data?.products.filter(item => item.category === 'smartphones' || item.category === 'tablets' || item.category === 'mens-watches' || item.category === 'laptops')

  useEffect(() => {
    if (debounceTerm) {
      dispatch(fetchSearch(debounceTerm))
    }
  }, [debounceTerm, dispatch])

  const handelSearch = (item) => {
    toPage(`/product/${item.id}`)
    setSearchTerm('')
  }

  return (
    <header className="sticky top-[10px] z-1000">
      <div className="container bg-blur flex items-center justify-between h-[60px] px-[15px]">

        <div className="logo flex items-center gap-[5px]">
          <img src={Logo} alt="logo-icon" width={50} />
          <h1 className="text-[1.5rem]">
            <span className="font-[600]">Tech</span>
            <span>Sphere</span>
          </h1>
        </div>

        <div className={`flex items-center gap-[50px] max-xl:gap-[20px] max-xl:absolute max-xl:right-0 max-xl:top-[65px] max-xl:flex-col max-xl:w-full max-xl:px-[20px] max-xl:py-[20px] max-xl:rounded-[20px] max-xl:bg-blue-900 max-xl:shadow-xl transition duration-300 ${nav ? 'max-xl:translate-y-[0] max-xl:z-1000 max-xl:opacity-100' : 'max-xl:translate-y-[-150px] max-xl:z-[-1] max-xl:opacity-0'}`}>

          <NavLinks />

          <div className="actions flex items-center gap-[10px] max-xl:w-full relative">
            <div className="input-wrapper bg-blur overflow-hidden max-xl:flex-1">
              <FontAwesomeIcon icon={faSearch} className="absolute top-[50%] translate-[-50%] left-[20px]" />
              <input
                type="search"
                name="search"
                placeholder="Search Products..."
                className="border-none outline-none bg-transparent py-[10px] px-[40px_20px] text-[14px] w-full"
                autoComplete="off"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
              />
            </div>

            <button className="text-[1.25rem]">
              <FontAwesomeIcon icon={faUser} />
            </button>

            <button className="text-[1.25rem] relative" onClick={() => toPage("/cart")}>
              <FontAwesomeIcon icon={faCartShopping} />
              {cartItems.items.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[12px] text-center content-center w-4.5 h-4.5 bg-red-600 rounded-full">{cartItems.items.length}</span>
              )}
            </button>

            {searchTerm && (
              <ul className={`text-[12px] absolute top-[60px] max-xl:top-[80px] left-0 w-full bg-blue-900 text-blue-100 shadow-xl rounded-[10px] max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-(--blue) scrollbar-track-tranparent ${loading ? 'p-[10px] flex items-center justify-center' : ''}`}>
                {loading && <LoadingSpener />}
                {!loading && error && <p>Error: {error}</p>}
                {!loading && data?.products && filterCategory && (
                  filterCategory.map(item => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between p-[8px] transition duration-300 hover:bg-blue-800 cursor-pointer"
                      onClick={() => handelSearch(item)}
                    >
                      <span>{item.title}</span>
                      <img src={item.thumbnail} alt="image-search" className="w-[32px]"/>
                    </li>
                  ))
                )}
                {!loading && !error && filterCategory?.length === 0 && (
                  <li className="p-[10px] text-center text-gray-400">Not Results Found For "{searchTerm}"</li>
                )}
              </ul>
            )}
          </div>
        </div>

        {
          nav ? (
            <button onClick={() => setNav(false)} className="button-close text-[1.25rem] min-xl:hidden min-xl:hidden">
              <FontAwesomeIcon icon={faClose} />
            </button>
          ) : (
            <button onClick={() => setNav(true)} className="button-bar text-[1.25rem] min-xl:hidden">
              <FontAwesomeIcon icon={faBarsStaggered} />
            </button>
          )
        }
      </div>
    </header>
  )
}

export default Header