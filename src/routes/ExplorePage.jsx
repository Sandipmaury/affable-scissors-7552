import React from "react";
import SliderOne from "../components/Slicker/SliderOne";
import SliderTwo from "../components/Slicker/SliderTwo";
import "./ExplorePage.css";

const ExplorePage = () => {
  return (
    <div className="maindiv">
      <h3>ExplorePage</h3>
      <div>
        <SliderOne />
      </div>

      <div className="single_box">
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
            top: "1rem",
          }}
        >
          <li>
            <a href="">HISPANIC HERITAGE</a>
          </li>

          <li>
            <a href="">#SHOWUSYOURBAG</a>
          </li>
          <li>
            <a href="">THE FOUNDER SERIES</a>
          </li>
          <li>
            <a href="">BLUE NOTES</a>
          </li>
          <li>
            <a href="">BYUING GUIDES</a>
          </li>
          <li>
            <a href="">CONSCIOUS BEAUTY</a>
          </li>
        </ul>
      </div>

      <div className="section_two">
        <div>
          <h2>NATIONAL HISPANIC HERITAGE MONTH 2022</h2>
        </div>
        <div>
          <h1>CELEBRATING HISPANIC FOUNDERS</h1>
        </div>
        <div className="section_two_p">
          <p>
            In honor of National Hispanic Heritage Month, we're spotlighting the
            Hispanic founders and co- founders of our favorite beauty brands. We
            believe that they bring unique perspectives to our industry, and
            we're so happy to be able to feature them and their fabulous
            products!
          </p>
          <a href="" style={{ color: "rgb(0, 75, 145)" }}>
            Explore
          </a>
        </div>
      </div>

      <div>
        <SliderTwo />
      </div>
    </div>
  );
};

export default ExplorePage;
