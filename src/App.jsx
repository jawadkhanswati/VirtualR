import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import Testimonials from "./components/Testimonials"
import WorkFlow from "./components/WorkFlow"


function App() {


  return (
   <>
   <Navbar/>
   <div className="max-w-2xl lg:max-w-4xl mx-auto pt-16 px-6">
   <HeroSection/>
   <FeatureSection/>
   <WorkFlow/>
   <Price />
   <Testimonials/>
   <Footer/>
   </div>
   </>
    
  )
}

export default App
