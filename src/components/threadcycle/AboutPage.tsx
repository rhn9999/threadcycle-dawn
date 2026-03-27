const AboutPage = () => (
  <div>
    {/* Image with Text */}
    <section className="about-image-text">
      <div className="about-image-text__image">About Image</div>
      <div className="about-image-text__content">
        <p className="about-overline">Our Story</p>
        <h1 className="about-heading">Second-hand fashion, first-class finds.</h1>
        <p className="about-body">
          ThreadCycle started with a simple idea: great style shouldn't cost the earth. We source pre-loved clothing from trusted suppliers, inspect every piece by hand, and bring it to you — cleaned, pressed, and ready to wear.
        </p>
        <p className="about-body" style={{ marginTop: 16 }}>
          Every item in our store is one-of-a-kind. When it's gone, it's gone. That's what makes thrifting exciting — and what makes your wardrobe truly yours.
        </p>
      </div>
    </section>

    {/* Multi-column */}
    <section className="multi-column">
      <div className="dawn-container" style={{ display: "contents" }}>
        <div className="multi-column__item">
          <div className="multi-column__icon">🔍</div>
          <p className="multi-column__title">Our Sourcing Process</p>
          <p className="multi-column__body">Every piece is handpicked from trusted vintage dealers, estate sales, and sustainable suppliers worldwide.</p>
        </div>
        <div className="multi-column__item">
          <div className="multi-column__icon">⭐</div>
          <p className="multi-column__title">Condition Ratings</p>
          <p className="multi-column__body">We grade every item honestly — from "Like New" to "Good" — so you know exactly what you're getting.</p>
        </div>
        <div className="multi-column__item">
          <div className="multi-column__icon">🌿</div>
          <p className="multi-column__title">Why Thrift?</p>
          <p className="multi-column__body">The fashion industry is one of the top polluters. Buying second-hand reduces waste and extends the lifecycle of great clothing.</p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="dawn-section">
      <div className="dawn-container">
        <div className="stats-row">
          <div>
            <div className="stat__number">4,200+</div>
            <div className="stat__label">Customers</div>
          </div>
          <div>
            <div className="stat__number">12,000 kg</div>
            <div className="stat__label">Saved</div>
          </div>
          <div>
            <div className="stat__number">1-of-1</div>
            <div className="stat__label">Items</div>
          </div>
          <div>
            <div className="stat__number">48hr</div>
            <div className="stat__label">Dispatch</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
