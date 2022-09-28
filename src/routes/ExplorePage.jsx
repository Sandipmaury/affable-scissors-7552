import React from 'react'
import SliderOne from '../components/Slicker/SliderOne';
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
        
      </div>
    </div>
  )
}

export default ExplorePage