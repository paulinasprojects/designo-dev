import { AboutUsHero } from "../components/about-us-hero"
import { AboutUsLocation } from "../components/about-us-location"
import { AboutUsTalent } from "../components/about-us-talent"

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHero/>
      <AboutUsTalent/>
      <AboutUsLocation/>
    </div>
  )
}

export default AboutUsPage