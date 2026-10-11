import Slider from "../../components/slider/Slider"
import Categorys from "../../components/categorys/Categories"
import FeaturedSmartphones from "../../components/featuredSmartphones/FeaturedSmartphones"
import Panner from "../../components/panner/Panner"
import FeaturedLaptops from "../../components/featuredLaptops/featuredLaptops"

import "./homePage.css"
import ContactMe from "../../components/contactMe/ContactMe"

function HomePage() {
  return (
    <main className="home-page">
      <Slider />
      <Categorys />
      <FeaturedSmartphones />
      <Panner />
      <FeaturedLaptops />
      <Panner />
      <ContactMe />
    </main>
  )
}

export default HomePage