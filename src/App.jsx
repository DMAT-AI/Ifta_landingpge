import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import KeyFeatures from './components/KeyFeatures'
import NavBar from './components/NavBar'
import Partnerships from './components/Partnerships'
import Video from './components/Video'
// import FormData from "./components/FormData"

function App() {


  return (
    <>
    <NavBar />
    <HeroSection />
    <Partnerships />
    <KeyFeatures />
    <HowItWorks />
    {/* <FormData /> FORM handling is done using forbold for now */}
    {/* <h1 className="container flex justify-center font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-green-600 mb-5 ">Contact Us</h1> */}
    <Video />

  </>
  )
}

export default App
