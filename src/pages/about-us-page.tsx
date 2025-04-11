import { AboutUsHero } from "../components/about-us-hero"
import { AboutUsLocation } from "../components/about-us-location"
import { AboutUsRealDeal } from "../components/about-us-real-deal"
import { AboutUsTalent } from "../components/about-us-talent"

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHero/>
      <AboutUsTalent/>
      <AboutUsLocation/>
      <AboutUsRealDeal/>
    </div>
  )
}

export default AboutUsPage