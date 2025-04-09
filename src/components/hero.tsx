import "../styles/hero.css";

export const Hero = () => {
  return (
    <section className="hero-section">
    <div className="hero-text-container">
      <div className="hero-text-container-text">
        <h1 className="hero-h1">
          Award-winning custom  designs and digital <br /> branding solutions
        </h1>
        <p className="hero-p">
          With over 10 years in the industry, we are experienced in <br /> creating fully responsive websites, app
          design, and engaging <br /> brand experiences. Find out more about our services.
        </p>
        <button className="hero-button">
            Learn more
        </button>
      </div>
      <div className="hero-image-container">
      <img className="hero-image" src="/assets/home/desktop/image-hero-phone.png"/>
      </div>
    </div>
  </section>
  )
}
