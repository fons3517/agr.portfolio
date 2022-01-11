import React, { useState } from "react";
import { Carousel } from "react-bootstrap"

function AboutMe() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel id="aboutme" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fullstack Developer</h3>
          <p> Passionated in developing high performance web applications catering to business needs. Skilled and motivated to work in team and as individual as per business needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>I Love Languages</h3>
          <p>I am fascinated with languages and learning to read and write them</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Technologies gained and eager to learn more</h3>
          <p>
            Proficient in HTML, CSS, JAvascript, JQuery, MySQL, OOPS concepts, Nodejs, Express, MongoDB,Mongoose & Sequelize ORM, Handlebars, REACT, MERN Stack development. APIs,
            Authentication (JSON Web token / Session storage), Local Storage, Progressive Web Applications, Indexed DBs, Service Workers. JEST unit testing.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



export default AboutMe;
