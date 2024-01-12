import React from "react";
import { Row, Container } from "react-bootstrap";
import PhoneImg from "./images/images (1).jpg";
function HeroBanner() {
  return (
    <section id="home">
      <Container>
        <Row>
          <div className="home-text">
            <div className="section-text__subtitle"> We Connect</div>
            <div className="section-text__title-big">
              Sunset Offers Mobile&Internet Plans in Finland.
            </div>
            <div className="section-text__body">
              Sunrise mobile, internet, and TV subscriptions can only be
              canceled over the phone or via Sunrise Live Chat. Written
              cancellations by mail, fax, or email are not valid.
            </div>
            {/* <a href="#download" className="download-btn">
              Download App
            </a> */}
          </div>

          <div className="section-image">
            <img
              className="zoom-in-out-box"
              src={PhoneImg}
              style={{
                // transform: " translate(-50%, -50%)",
                // animation: "float 5s ease-in-out infinite",
                backgroundColor: "transparent",
                width: "375px",
                borderRadius: "30px",
                boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
              }}
              alt="statistics"
            />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;
