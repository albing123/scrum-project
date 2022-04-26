import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-content">
        <div className="footer-lists">
          <div className="list">
            <h1>Menu</h1>
            <p>Home</p>
            <p>Products</p>
            <p>Contact</p>
            <p>New Items</p>
          </div>
          <div className="list">
            <h1>Where we are</h1>
            <p>Götagatan 12</p>
          </div>
          <div className="list">
            <h1>Social Media</h1>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
}
