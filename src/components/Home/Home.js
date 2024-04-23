import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/wordpress-developer.png";
import style from "./Home.module.css";

const Home = () => {
  return (
   <section>
    <Container fluid className="home-section" id="home" style={{padding:  9 +'em'}}>
    <Container className="home-content" style={{marginTop:  4 +'em'}}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className={  ` ${style.neontext} heading`} >
              {/* <h1 style={{ paddingBottom: 15 }} className={ 'heading'}> */}
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className={  ` ${style.neontext} heading-name`}>
                I'M
                <strong className="main-name"> Pooja Garg</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                {/* <Type /> */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
    </Container>

   </section>
  );
}

export default Home;