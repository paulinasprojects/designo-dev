import { locationsData } from "../lib/data";
import "../styles/locations-card.css";

export const AustraliaLocationCard = () => {
  return (
    <div>
      {locationsData.slice(1, 2).map((data) => (
        <div key={data.id}>
          <div className="location-card-australia-main-content-container">
          <div>
            <img src={data.desktopImage} alt=""  className="location-card-desktop-image" />
            <img src={data.tabletImage} alt="" className="location-card-tablet-image" />
            <img src={data.desktopImage} alt="" className="location-card-mobile-image" />
          </div>
          <div className="location-card-title-content-container">
          <h2>{data.title}</h2>
          <div className="location-card-content-container">
            <div className="location-card-address">
              <p className="location-bold-text">Designo AU Office</p>
              <p>19 Balonne Street  <br /> New South Wales 2443</p>
            </div>
            <div className="location-card-contact">
              <p className="location-bold-text">Contact</p>
              <p>P: {data.phone}</p>
              <p>M: {data.email}</p>
            </div>
          </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
