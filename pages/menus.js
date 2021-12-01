import Head from "next/head";
import Script from "next/script";
import { Card, Row, Col } from "react-bootstrap";
import bg from "../public/assets/banner2.jpg";
import Image from "next/image";
import M1 from "../public/assets/featured1.jpg";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resto | Menus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/resto.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/fe2e019d14.js"
        crossOrigin="anonymous"
      ></Script>
      <div className="menus">
        <Image
          className="bg"
          src={bg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

        <div className="head"></div>
        <div className="search">
          <form>
            <input type="search" placeholder="search dish..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div className="menus-food">
          <Row>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xxl={2}
              className="d-flex justify-content-center"
            >
              <Card>
                <Card.Body>
                  <Image src={M1} />
                </Card.Body>
                <Card.Title>Bowl Rice</Card.Title>
                <Card.Footer>
                  <p>P230</p>
                  <button>Order</button>
                </Card.Footer>
                <Card.Footer>
                  <Card.Text>
                    <Card.Link>Details</Card.Link>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xxl={2}
              className="d-flex justify-content-center"
            >
              <Card>
                <Card.Body>
                  <Image src={M1} />
                </Card.Body>
                <Card.Title>Bowl Rice</Card.Title>
                <Card.Footer>
                  <p>P230</p>
                  <button>Order</button>
                </Card.Footer>
                <Card.Footer>
                  <Card.Text>
                    <Card.Link>Details</Card.Link>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xxl={2}
              className="d-flex justify-content-center"
            >
              <Card>
                <Card.Body>
                  <Image src={M1} />
                </Card.Body>
                <Card.Title>Bowl Rice</Card.Title>
                <Card.Footer>
                  <p>P230</p>
                  <button>Order</button>
                </Card.Footer>
                <Card.Footer>
                  <Card.Text>
                    <Card.Link>Details</Card.Link>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xxl={2}
              className="d-flex justify-content-center"
            >
              <Card>
                <Card.Body>
                  <Image src={M1} />
                </Card.Body>
                <Card.Title>Bowl Rice</Card.Title>
                <Card.Footer>
                  <p>P230</p>
                  <button>Order</button>
                </Card.Footer>
                <Card.Footer>
                  <Card.Text>
                    <Card.Link>Details</Card.Link>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xxl={2}
              className="d-flex justify-content-center"
            >
              <Card>
                <Card.Body>
                  <Image src={M1} />
                </Card.Body>
                <Card.Title>Bowl Rice</Card.Title>
                <Card.Footer>
                  <p>P230</p>
                  <button>Order</button>
                </Card.Footer>
                <Card.Footer>
                  <Card.Text>
                    <Card.Link>Details</Card.Link>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xxl={2}
              className="d-flex justify-content-center"
            >
              <Card>
                <Card.Body>
                  <Image src={M1} />
                </Card.Body>
                <Card.Title>Bowl Rice</Card.Title>
                <Card.Footer>
                  <p>P230</p>
                  <button>Order</button>
                </Card.Footer>
                <Card.Footer>
                  <Card.Text>
                    <Card.Link>Details</Card.Link>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xxl={2}
              className="d-flex justify-content-center"
            >
              <Card>
                <Card.Body></Card.Body>
                <Card.Title>Bowl Rice</Card.Title>
                <Card.Footer>
                  <p>P230</p>
                  <button>Order</button>
                </Card.Footer>
                <Card.Footer>
                  <Card.Text>
                    <Card.Link>Details</Card.Link>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
