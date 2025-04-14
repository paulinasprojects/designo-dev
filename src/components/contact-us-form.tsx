import "../styles/contact-us-form.css";

export const ContactUsForm = () => {
  return (
    <div className="contact-us-form-main-container">
      <div className="contact-us-title-container">
        <h1>Contact Us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or <br /> idea and find out how we can help your business grow. If you are <br /> looking for unique digital experiences that’s relatable to your <br /> users, drop us a line.</p>
      </div>
        <form>
      <div className="contact-us-form-container">
        <div>
          <input type="text" id="name-input" placeholder="Name" required />
        </div>
        <div>
          <input type="text" id="name-input" placeholder="Email Address" required />
        </div>
        <div>
        <input type="text" id="name-input" placeholder="Phone" required  />
        </div>
        <div>
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </div>
        </form>
    </div>
  )
}
