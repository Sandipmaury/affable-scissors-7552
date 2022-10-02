import React from "react";
import SliderOne from "../components/Slicker/SliderOne";
import SliderThree from "../components/Slicker/SliderThree";
import SliderTwo from "../components/Slicker/SliderTwo";

import "./ExplorePage.css";

const ExplorePage = () => {
  return (
    <div
      style={{
        width: "100%",
        // border: "2px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // margin: "auto",
      }}
    >
      <section className="commondiv">
        <div className="class_slider">
          <SliderOne />
        </div>
      </section>

      <section className="commondiv">
        <div className="other_boxes">
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              padding: "2rem",
              listStyleType: "none",
              border: "1px solid gray ",
            }}
          >
            <li className="styling_li">
              <a href="">HISPANIC HERITAGE</a>
            </li>

            <li className="styling_li">
              <a href="">#SHOWUSYOURBAG</a>
            </li>
            <li className="styling_li">
              <a href="">THE FOUNDER SERIES</a>
            </li>
            <li className="styling_li">
              <a href="">BLUE NOTES</a>
            </li>
            <li className="styling_li">
              <a href="">BYUING GUIDES</a>
            </li>
            <li>
              <a href="">CONSCIOUS BEAUTY</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="commondiv">
        <div className="other_boxes section_two">
          <div>
            <h2>NATIONAL HISPANIC HERITAGE MONTH 2022</h2>
          </div>
          <div>
            <h1>CELEBRATING HISPANIC FOUNDERS</h1>
          </div>
          <div className="section_two_p">
            <p>
              In honor of National Hispanic Heritage Month, we're spotlighting
              the Hispanic founders and co- founders of our favorite beauty
              brands. We believe that they bring unique perspectives to our
              industry, and we're so happy to be able to feature them and their
              fabulous products!
            </p>
            <a href="" style={{ color: "rgb(0, 75, 145)" }}>
              Explore
            </a>
          </div>
        </div>
      </section>

      <section style={{  marginBottom: "8rem", width:'80%', margin:"auto", height:'80%' }}>
        <div className="class_slider">
          <SliderTwo />
        </div>
      </section>

      <section className="commondiv">
        <div className="other_boxes sectionFour_text">
          <div>
            <h1>SALUTING MORE HISPANIC CREATORS!</h1>
          </div>
          <div className="section_two_p1">
            <p>
              While we’re super in love with the Hispanic founders of the beauty
              brands we carry (see above), we also wanted to shine a light on
              six fantastic Hispanic female founders of lines we don't sell.
            </p>
            <a href="" style={{ color: "rgb(0, 75, 145)" }}>
              Explore
            </a>
          </div>
        </div>
      </section>

      <section className="commondiv">
        <div className="other_boxes sectionFive_text">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/showusyourbag-center.svg?v=1641353270"
              alt=""
            />
          </div>
          <div className="section_two_p2">
            <p>
              We believe beauty is for everyone. If you agree, join us in
              celebrating the uniqueness in all individuals.
            </p>
            <a href="" style={{ color: "rgb(0, 75, 145)" }}>
              Explore
            </a>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "8rem", width:'80%', margin:"auto", height:'80%' }}>
        <div className="class_slider section_six_slider">
          <SliderThree />
        </div>
      </section>

      <section className="commondiv">
        <div className="other_boxes section_seven_text">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/blue-notes-center_c5d1f372-3a08-4ff7-8cbb-ca2f7dfaf774.svg?v=1647534726"
              alt=""
            />
          </div>
          <div className="section_two_p3">
            <p>
              Nothing evokes a mood or a memory quite like the perfect perfume.
              Whether you're searching for your signature scent or prefer to mix
              it up moment to moment, you'll discover plenty of options among
              our curated offerings.
            </p>
            <a href="" style={{ color: "rgb(0, 75, 145)" }}>
              Explore
            </a>
          </div>
        </div>
      </section>

    <section >
      <div className="other_boxes section_eight">
        <div >
          <img
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/blue-notes-2022-jan-tabbed-content_65055229-4635-4555-9991-00f1001d479b_x650.jpg?v=1647534797%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/blue-notes-2022-jan-tabbed-content_65055229-4635-4555-9991-00f1001d479b_1000x.jpg?v=1647534797"
            alt=""
          />
        </div>

        <div className="section_two_p4" >
          <div>
            <h1>Blue Notes</h1>
          </div>
          <div className="section_two_p">
            <p>
              Bluemercury's destination for all things olfactory. Take our quiz
              to figure out your perfume personality!
            </p>
            <a href="" style={{ color: "rgb(0, 75, 145)" }}>
              FIND YOUR FRAGRANCE
            </a>
          </div>
        </div>
      </div> 
      </section>
    </div>
  );
};
export default ExplorePage;
