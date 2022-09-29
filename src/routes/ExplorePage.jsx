import React from 'react'
import SliderOne from '../components/Slicker/SliderOne';
import SliderThree from '../components/Slicker/SliderThree';
import SliderTwo from '../components/Slicker/SliderTwo';
import "./ExplorePage.css";

const ExplorePage = () => {
  return (
    <div className='maindiv'>
      <h3>ExplorePage</h3>
      <div>
      <SliderOne />
      </div>

      <div className='single_box'>
        <ul style={{
          display: "flex",
          justifyContent: 'space-evenly',
          position: "relative",
          top: '1rem'
        }}>
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
            <a href=''>BLUE NOTES</a>
          </li>
          <li>
            <a href="">BYUING GUIDES</a>
          </li>
          <li>
            <a href="">CONSCIOUS BEAUTY</a>
          </li>
        </ul>
      </div>

      <div className='section_two'>
        <div><h2>NATIONAL HISPANIC HERITAGE MONTH 2022</h2></div>
        <div><h1>CELEBRATING HISPANIC FOUNDERS</h1></div>
        <div className='section_two_p'>
          <p>In honor of National Hispanic Heritage Month, we're spotlighting the Hispanic founders and co-
        founders of our favorite beauty brands. We believe that they bring unique perspectives to our
        industry, and we're so happy to be able to feature them and their fabulous products!</p>
        <a href="" style={{color:"rgb(0, 75, 145)"}}>Explore</a>
        </div>
        
      </div>
      
      <div className='section_three'>
        <SliderTwo />
      </div>
      
      <div className='sectionFour_text'>
      <div><h1>SALUTING MORE HISPANIC CREATORS!</h1></div>
        <div className='section_two_p1'>
          <p>While we’re super in love with the Hispanic founders of the beauty brands we carry (see above), we also wanted to shine a light on six fantastic Hispanic female founders of lines we don't sell.</p>
        <a href="" style={{color:"rgb(0, 75, 145)"}}>Explore</a>
        </div>
      </div>

      <div className='sectionFive_text'>
      <div><img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/showusyourbag-center.svg?v=1641353270' alt='' /></div>
        <div className='section_two_p2'>
          <p>We believe beauty is for everyone. If you agree, join us in celebrating the uniqueness in all individuals.</p>
        <a href="" style={{color:"rgb(0, 75, 145)"}}>Explore</a>
        </div>
      </div>

      <div className='section_six_slider'>
        <SliderThree />
      </div>

      <div className='section_seven_text'>
      <div><img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/blue-notes-center_c5d1f372-3a08-4ff7-8cbb-ca2f7dfaf774.svg?v=1647534726' alt='' /></div>
        <div className='section_two_p3'>
          <p>Nothing evokes a mood or a memory quite like the perfect perfume. Whether you're searching for your signature scent or prefer to mix it up moment to moment, you'll discover plenty of options among our curated offerings.</p>
        <a href="" style={{color:"rgb(0, 75, 145)"}}>Explore</a>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage