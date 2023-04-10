import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Shoe from "../img/shoes-img1.png";
import Shoe1 from "../img/shoes-img2.png";

const Title = () => {
  return (
    <div className="box">
      <div className="box1">
        <h1>NEW COLLECTIONS</h1>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim <br />
          ad minim veniam, quis nostrud exercitation
        </p>

        <div className="car0">
          <div className="car">
            <Card  className="cimg"  style={{ width: "80%" }}>
              <Card.Img variant="top" src={Shoe} />
              <Card.Body>
                <Card.Title className="cardtitle">
                <br/>
                  Mens Sports
                  <br />
                  $90
                </Card.Title>
              </Card.Body>
            </Card>
            <Button  className="b1" >SEE MORE</Button>
          </div>

          <div className="car1 ">
            <Card  className="cimg1" style={{ width: "80%" }}>
              <Card.Img  variant="top" src={Shoe1} />
              <Card.Body>
                <Card.Title className="cardtitle">
                <br/>
                  Mens Sports
                  <br />
                  $90
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
