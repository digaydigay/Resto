import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import F1 from "../../public/assets/featured1.jpg";
const FeaturedDish = () => {
  const [food, setFood] = useState([]);
  return (
    <div className="featured-food">
      <div className="featured-food-title">
        <h1>Featured Dishes</h1>
      </div>
      <Container fluid>
        <Row className="mb-5">
          <Col xs={7}>
            <Image src={F1} width={1000} />
          </Col>
          <Col xs={5}>
            <div className="featured-food-name">
              <h2>Rice Bowls</h2>
            </div>
            <h6>
              “Rice bowls have been a staple in Asia for decades, and they fit
              into the way Americans eat perfectly,” says Jason Kessler of
              FlyandDine.com. “Lots of flavors mixed together in a convenient
              format.”
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <div className="featured-food-name">
              <h2>Rice Bowls</h2>
            </div>
            <h6>
              “Rice bowls have been a staple in Asia for decades, and they fit
              into the way Americans eat perfectly,” says Jason Kessler of
              FlyandDine.com. “Lots of flavors mixed together in a convenient
              format.”
            </h6>
          </Col>
          <Col xs={7}>
            <Image src={F1} width={1000} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedDish;
