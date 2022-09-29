import React from 'react';
import "./SliderTwo.css"

const SliderTwo = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      return (
        <div className="slider-container-feature">
            <Slider {...settings} className="Sliders_feature">
                <div className='SliderTwo_main'>
                    <div style={{display:'flex'}}>                
                        <div>
                            <img src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/tata-harper-founder_3c7a22cc-3b01-4992-bde8-2a1497372e09_x650.jpg?v=1663261346%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/tata-harper-founder_3c7a22cc-3b01-4992-bde8-2a1497372e09_1000x.jpg?v=1663261346' alt='img1' />
                        </div>
                    
                        <div>
                            <p>TATA HARPER</p>
                            <h1>TATA HARPER</h1>
                            <a href="">LEARN MORE</a>
                        </div>
                    <div>
                    <div style={{display:'flex'}} >
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/natura-bisse-founder_dad13b40-5ef0-4305-9fc6-0af035b5db5d_x650.jpg?v=1663261582%20[(max-width:%20640px)]%20|%20//cdn.shopify.com/s/files/1/0283/0185/2747/files/natura-bisse-founder_dad13b40-5ef0-4305-9fc6-0af035b5db5d_1000x.jpg?v=1663261582" alt="" />
                        </div>
                        <div>
                            <h4>NATURA BISSE</h4>
                            <h2>Veronica Fisas</h2>
                            <p>DAUGHTER OF FOUNDER RICARDO FISAS</p>
                            <a href="">LEARN MORE</a>
                        </div>
                    </div>
                    
                    </div>
                    </div>    
                </div>
            </Slider>
        </div>
      );
    };

export default SliderTwo