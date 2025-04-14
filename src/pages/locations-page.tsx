import { AustraliaLocationCard } from "../components/australia-location-card"
import { CanadaLocationCard } from "../components/canada-location-card"
import { UnitedKingdomLocationCard } from "../components/united-kingdom-location-card";
import "../styles/locations-page.css";

const LocationsPage = () => {
  return (
    <div className="locations-page-container">
     <CanadaLocationCard />
     <AustraliaLocationCard/>
     <UnitedKingdomLocationCard/>
    </div>
  )
}

export default LocationsPage