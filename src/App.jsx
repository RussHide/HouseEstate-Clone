import { AboutUs, Contact, Gallery, Hero, Amenities, Stats, Footer } from "./Components"

const App = () => {
  return (
    <div className="bg-[#F4F8F5]">
      <Hero />
      <AboutUs />
      <Amenities />
      <Gallery />
      <Stats />
      <Contact />
      <Footer />
    </div>
  )
}

export default App