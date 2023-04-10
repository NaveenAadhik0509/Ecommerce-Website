import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate,Link } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const style={
      color:"red"
    }
  return (
    <div className="navbox ">
     <div className="navbox1">
      <Navbar>
        
          {/* <Navbar.Brand className="navtext"> <span style={style}> D</span> Mart</Navbar.Brand> */}
          <Link className="navtext" to='/'><span style={style}> D</span> Mart</Link>
          <Nav className="ms-auto">
            {/* <Nav.Link onClick={() => { navigate("/")}} className="navtext">D Mart</Nav.Link> */}
            <Nav.Link onClick={() => { navigate("/")}} className="navtext">Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/products")}}className="navtext">Products</Nav.Link>
            <Nav.Link onClick={() => { navigate("/cart")}}className="navtext">Cart</Nav.Link>
           </Nav>
        
      </Navbar>
      </div>
    </div>
  );
};

export default Home;
