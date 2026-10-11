import { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/home-page/HomePage"
import PageNotFound from "./pages/pageNotFound/PageNotFound"
import Cart from "./pages/cart/Cart"
const PhonePage = lazy(() => import("./pages/phone-page/PhonePage"))
const TapletPage = lazy(() => import("./pages/taplet-page/TapletPage"))
const WatchesPage = lazy(() => import("./pages/watches-page/WatchesPage"))
const LaptopsPage = lazy(() => import("./pages/laptops-page/LaptopsPage"))
const SingleProduct = lazy(() => import("./pages/singleProduct/SingleProduct"))

import "./app.css"
import Layout from "./components/layout"

const App = () => {
  return (
    <BrowserRouter basename="/TechSphere-product">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/phones" element={<PhonePage />} />
          <Route path="/taplets" element={<TapletPage />} />
          <Route path="/watches" element={<WatchesPage />} />
          <Route path="/laptops" element={<LaptopsPage />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App