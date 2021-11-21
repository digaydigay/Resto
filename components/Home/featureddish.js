import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import F1 from "../../public/assets/featured1.jpg";
import F2 from "../../public/assets/featured2.jpg";
const FeaturedDish = () => {
  const [food, setFood] = useState([]);
  return (
    <div className="featured-food">
      <div className="featured-food-title">
        <h1>Featured Dishes</h1>
      </div>
      <Container fluid>
        <Row className="mb-5">
          <Col md={6} xs={12} className="foodImg">
            <Image src={F2} objectPosition="center" alt="dish" />
          </Col>
          <Col md={6} xs={12}>
            <div className="featured-food-name">
              <h2>Sisig</h2>
            </div>
            <h6>
              “Served sizzling on a hot stone plate, sisig is a favorite pulutan
              (beer chow) among Filipinos. The meat is primarily chopped up
              parts of the pigs’ face — in the Philippines, no cut of the animal
              goes to waste. Some recipes use either mayonnaise or raw egg (to
              be mixed in while hot) to give it a creamier texture but the
              classic way is to incorporate pig’s brain into the dish.”
            </h6>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12} xs={{ order: "last" }} md={{ order: "first" }}>
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
          <Col md={6} xs={12} className="foodImg" xs={{ order: "first" }}>
            <Image src={F1} objectPosition="center" alt="dish" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedDish;