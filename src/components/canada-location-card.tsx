import { locationsData } from "../lib/data";
import "../styles/locations-card.css";

export const CanadaLocationCard = () => {
  return (
    <div>
     {locationsData.slice(0, 1).map((data) => (
      <div key={data.id}>
        <div className="location-card-main-content-container">
          <div className="location-card-title-content-container">
            <h2>{data.title}</h2>
            <div className="location-card-content-container">
              <div className="location-card-address">
                <p className="location-bold-text">Designo Central Office</p>
                <p>3886 Wellington Street  <br /> Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="location-card-contact">
                <p className="location-bold-text">Contact</p>
                <p>P: {data.phone}</p>
                <p>M: {data.email}</p>
              </div>
            </div>
          </div>
          <div>
            <img src={data.desktopImage} alt="" className="location-card-desktop-image" />
            <img src={data.tabletImage} alt="" className="location-card-tablet-image" />
            <img src={data.desktopImage} alt="" className="location-card-mobile-image" />
          </div>
        </div>
      </div>
     ))}
    </div>
  )
}
