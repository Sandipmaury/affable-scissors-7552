import React from 'react';
import Slider from "react-slick";
import "./SliderTwo.css";

const SliderTwo = () =>  {
  
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <div className="sliderdiv">

          <Slider {...settings}>
            
                <div className='sliderone'>
                    <div style={{width: "50%",height: "50%", }}>
                        <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/tata-harper-founder_3c7a22cc-3b01-4992-bde8-2a1497372e09_x650.jpg?v=1663261346%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/tata-harper-founder_3c7a22cc-3b01-4992-bde8-2a1497372e09_1000x.jpg?v=1663261346" alt="" />
                    </div>

                    <div style={{ width:'50%', background:"#fcf4ee" }} className="tataharper_heading">
                        <h3>TATA HARPER</h3>
                        <h2>TATA HARPER</h2>
                        <a href="">LEARN MORE</a>
                    </div>
                </div>    
              
                <div className='slidertwo'>
                    <div style={{width: "50%",height: "50%"}}>
                            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/natura-bisse-founder_dad13b40-5ef0-4305-9fc6-0af035b5db5d_x650.jpg?v=1663261582%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/natura-bisse-founder_dad13b40-5ef0-4305-9fc6-0af035b5db5d_1000x.jpg?v=1663261582" alt="" />
                      </div>

                    <div style={{ width:'50%', background:"white" }} className="tataharper_heading">
                      <h4>NATURA BISSE</h4>
                      <h2 style={{letterSpacing:'3px', lineHeight:"30px", fontStyle:'normal'}}>Veronica Fisas</h2>
                      <p>DAUGHTER OF FOUNDER RICARDO FISAS</p>
                      <a href="">LEARN MORE</a>
                    </div>
                </div>
                
                <div className='sliderthree' >
                    <div className='thirdimageWrapper' style={{width: "50%",height: "50%"}}>
                              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/joanna-vargas-founder_44b0a83d-4d34-42f0-b7c7-a8a38baf0173_x650.jpg?v=1663261497%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/joanna-vargas-founder_44b0a83d-4d34-42f0-b7c7-a8a38baf0173_1000x.jpg?v=1663261497" alt="" />
                    </div>

                    <div style={{ width:'50%', background:"white" }} className="tataharper_heading">
                      <h4>JOANNA VARGAS</h4>
                      <h2>JOANNA VARGAS</h2>
                      <a href="">LEARN MORE</a>
                    </div>
                </div>


           
          </Slider>

        </div>
      );
  }

export default SliderTwo;

