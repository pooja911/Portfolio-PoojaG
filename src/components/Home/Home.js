import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/wordpress-developer.png";
import style from "./Home.module.css";
import Type from './Type';

const Home = () => {
  return (
   <section>
    <Container fluid className="home-section" id="home" style={{padding:  9 +'em'}}>
    <Container className="home-content" style={{marginTop:  4 +'em'}}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className={  ` ${style.neontext} heading`} >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className={  ` ${style.neontext} heading-name`}>
                I'M &nbsp;
                <strong className="main-name"> Pooja Garg</strong>
              </h1>

              <div style={{ marginTop:'1em', textAlign: "left", color:'deeppink',fontSize:'2em',display:'flex' }}>
              {/* "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things." */}
              <Type/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "20em" }}
              />
            </Col>
          </Row>
        </Container>
    </Container>

   </section>
  );
}

export default Home;