import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Shoe from "../img/s1.png";
const Arraival = () => {
  const style = {
    color: "red",
  };
  return (
    <div>
      <div className="box2">
        <div className="box3">
          <h1>Racing Boots</h1>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            <br /> Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          <div className="box4">
            <Row>
              <Col sm={12} lg={8}>
                <div className="im1">
                  <img src={Shoe}></img>
                </div>
              </Col>
              <Col sm={12} lg={4}>
                <div className="te1">
                  Sale <br />
                  <span style={style}>JOGING</span> <br />
                  SHOES <br />
                  <span style={style}>$</span>100 <br />
                  <Button className="A1">SEE MORE</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arraival;
