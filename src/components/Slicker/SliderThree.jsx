import React from 'react';
import Slider from "react-slick";
import "./SliderThree.css";

const SliderThree = () =>  {
  
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true  ,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <div className="sliderdiv_Three">
         
          <Slider {...settings}>
            
                <div className='sliderone_Three'>
                    <div style={{width: "50%",height: "50%",}}>
                        <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/suyb-tia-content-block_x650.jpg?v=1652906343%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/suyb-tia-content-block_1000x.jpg?v=1652906343" alt="" />
                    </div>

                    <div style={{ width:'50%', background:"#fcf4ee" }} className="tataharper_heading_Three">
                        <h3>TIA</h3>
                        <h2>ENGINEER + MODEL</h2>
                        <a href="">READ THE Q+A</a>
                    </div>
                </div>    
              
                <div className='slidertwo_Three'>
                    <div style={{width: "50%",height: "50%"}}>
                            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/suyb-lily-content-block_x650.jpg?v=1652906190%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/suyb-lily-content-block_1000x.jpg?v=1652906190" alt="" />
                      </div>

                    <div style={{ width:'50%', background:"white" }} className="tataharper_heading_Three">
                      <h4>LILY</h4>
                      {/* <h2 style={{letterSpacing:'3px', lineHeight:"30px", fontStyle:'normal'}}>Veronica Fisas</h2> */}
                      <p>SIGNER + SONGWRITER</p>
                      <a href="">READ THE Q+A</a>
                    </div>
                </div>
                
                <div className='sliderthree_Three' >
                    <div className='thirdimageWrapper_Three' style={{width: "50%",height: "50%"}}>
                              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/suyb-chante-content-block_x650.jpg?v=1652906106%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/suyb-chante-content-block_1000x.jpg?v=1652906106" alt="" />
                    </div>

                    <div style={{ width:'50%', background:"white" }} className="tataharper_heading_Three">
                      <h4>Chanté</h4>
                      <h2>TATTO ARTIST + PAINTER</h2>
                      <a href="">READ THE Q+A</a>
                    </div>
                </div>


           
          </Slider>
              
        </div>
      );
  }

export default SliderThree;

