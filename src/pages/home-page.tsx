import { AboutUsSection } from "../components/about-us"
import { Hero } from "../components/hero"
import { PortfolioPorjects } from "../components/portfolio-projects"

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <PortfolioPorjects/>
      <AboutUsSection/>
    </div>
  )
}

export default Homepage