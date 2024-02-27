import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at <span>your door</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, dolorum in. Veritatis, consequuntur. Eum consectetur repellat autem voluptatem, quibusdam iste!</p>
                  <Link className="order__btn d-flex align-items-center justify-content-center gap-2 " to="/foods">
                    Order <i className="ri-arrow-right-s-line"></i>
                  </Link>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
