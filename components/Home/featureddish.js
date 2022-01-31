import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/AuthProvider";
import { useOrderContext } from "../../context/orderContext";
import { db } from "../../firebase";
const FeaturedDish = () => {
  const { orders, showsignupmodal, showplaceorder, currentUser } =
    useAuthContext();
  const { setIsOrder } = useOrderContext();
  const [menus, setMenus] = useState();
  const Router = useRouter();
  useEffect(() => {
    const fetch = async () => {
      await db.collection("menus").onSnapshot((snap) => {
        setMenus(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    fetch();
  }, []);

  return (
    <>
      <div className="featured-food">
        <div className="featured-food-title">
          <h1>Todays Menu</h1>
        </div>
        {menus ? (
          <div className="menus-food">
            <Row>
              {menus.map((menu, index) => {
                if (index < 6) {
                  return (
                    <Col
                      xs={6}
                      sm={6}
                      md={4}
                      lg={3}
                      xxl={2}
                      className="d-flex justify-content-center"
                      key={index}
                    >
                      <Card>
                        <Card.Body>
                          <Image
                            src={menu.foodPhoto}
                            width="300"
                            height="300"
                            alt="img"
                          />
                        </Card.Body>
                        <Card.Title>{menu.foodName}</Card.Title>
                        <Card.Footer>
                          <p>{`P${menu.foodPrice}`}</p>
                          <button
                            onClick={() => {
                              if (!currentUser) {
                                return showsignupmodal();
                              }
                              showplaceorder();
                              setIsOrder(menu);
                            }}
                          >
                            Place order
                          </button>
                        </Card.Footer>
                      </Card>
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
        ) : (
          <div className="featured-loading">
            <Row>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xxl={2}
                className="d-flex justify-content-center"
              >
                <Card></Card>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xxl={2}
                className="d-flex justify-content-center"
              >
                <Card></Card>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xxl={2}
                className="d-flex justify-content-center"
              >
                <Card></Card>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xxl={2}
                className="d-flex justify-content-center"
              >
                <Card></Card>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xxl={2}
                className="d-flex justify-content-center"
              >
                <Card></Card>
              </Col>
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xxl={2}
                className="d-flex justify-content-center"
              >
                <Card></Card>
              </Col>
            </Row>
          </div>
        )}
        <div className="see-more">
          <button
            onClick={() => {
              Router.replace("/menus");
            }}
          >
            see more menus... <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedDish;
