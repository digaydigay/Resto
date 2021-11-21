import React from "react";
import Image from "next/image";
import { Carousel, Container, Card } from "react-bootstrap";
import P1 from "../../public/assets/featured1.jpg";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="title">
        <h1>Testimonials</h1>
      </div>
      <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident totam incidunt modi sunt! Asperiores ex modi vitae
                nostrum, necessitatibus quia soluta suscipit molestias ea iusto
                doloribus expedita, dignissimos velit commodi? Quia cumque odit
                recusandae, adipisci mollitia omnis quisquam sint commodi iusto
                perspiciatis ut porro nobis ex facilis incidunt repellat iste?
              </p>
            </Card.Body>
            <Card.Footer>
              <div className="cardimg">
                <Image src={P1} objectPosition="center" alt="img" />
              </div>
              <Card.Title>Jonathan Digay 2</Card.Title>
              <Card.Subtitle>student</Card.Subtitle>
            </Card.Footer>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident totam incidunt modi sunt! Asperiores ex modi vitae
                nostrum, necessitatibus quia soluta suscipit molestias ea iusto
                doloribus expedita, dignissimos velit commodi? Quia cumque odit
                recusandae, adipisci mollitia omnis quisquam sint commodi iusto
                perspiciatis ut porro nobis ex facilis incidunt repellat iste?
                doloribus expedita, dignissimos velit commodi? Quia cumque odit
                recusandae, adipisci mollitia omnis quisquam sint commodi iusto
                perspiciatis ut porro nobis ex facilis incidunt repellat iste?
              </p>
            </Card.Body>

            <Card.Footer>
              <div className="cardimg">
                <Image src={P1} objectPosition="center" alt="img" />
              </div>
              <Card.Title>Jonathan Digay</Card.Title>
              <Card.Subtitle>student</Card.Subtitle>
            </Card.Footer>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonial;
