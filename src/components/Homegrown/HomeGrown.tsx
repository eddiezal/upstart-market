import React from "react";
import "./Homegrown.module.css";

const Homegrown = () => {
  return (
    <section className="homegrown-container">
      <h2 className="homegrown-title">Homegrown, Handcrafted, and <span className="gradient-text">Hyper-Local</span></h2>
      <p className="homegrown-subtitle">
        Upstart Market connects <strong>home growers, urban farmers, and small-scale artisans</strong> with distributors and consumers.
        By cutting out the middleman, we ensure fresh, high-quality, local food reaches the people who need it most.
      </p>
      <div className="homegrown-grid">
        <div className="homegrown-card">
          <div className="homegrown-card-icon">🌱</div>
          <h3 className="homegrown-card-title">Home Growers & Farmers</h3>
          <p className="homegrown-card-text">Providing fresh, locally sourced ingredients from backyard gardens to urban farms.</p>
        </div>
        <div className="homegrown-card">
          <div className="homegrown-card-icon">🎨</div>
          <h3 className="homegrown-card-title">Transformers & Artisans</h3>
          <p className="homegrown-card-text">Turning ingredients into unique, handcrafted food products.</p>
        </div>
        <div className="homegrown-card">
          <div className="homegrown-card-icon">🚛</div>
          <h3 className="homegrown-card-title">Distributors & Markets</h3>
          <p className="homegrown-card-text">Helping deliver and connect products with local businesses and consumers.</p>
        </div>
      </div>
      <button className="homegrown-cta">
        Join the Upstart Market Movement
      </button>
    </section>
  );
};

export default Homegrown;
