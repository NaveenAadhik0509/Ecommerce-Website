import React from "react";
import banner from "../img/banner.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Shoes1 from "../img/shoes-1.png";
import Shoes2 from "../img/shoes-2.png";
import Shoes3 from "../img/shoes-3.png";
import { useNavigate } from "react-router-dom";
// import Typical from "rect-typical";

export const Main = () => {
  return (
    <div className="container1">
      <div className="container3">
        <Row>
          <Col sm={12} lg={6}>
            <div className="container2">
              <h1>New Running Shoes </h1>
              
                {/* <div className="animation1">
                  <span>Men's</span>
                  <span>Men's</span>
                  <span>Men's</span>
                </div> */}
                 <h2>
                  {/* /* <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Men's",
                    1000,
                    "Women's",
                    1000,
                    "Children's",
                    1000,
                  ]}
                  /> */ }
                   Men's Like Plex</h2>
              <p>
                ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua.
              </p>
              <Button className="c1">Buy Now</Button>
              <Button className="c2" variant="primary">
                See More
              </Button>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 "
                  src={Shoes1}
                  alt="First slide"
                />
               
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 "
                  src={Shoes2}
                  alt="Second slide"
                />
               
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img className="d-block w-100" 
                src={Shoes3} 
                alt="Third slide" />
            
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};
