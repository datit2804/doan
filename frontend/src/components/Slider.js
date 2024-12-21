import React, { memo } from "react";
import Slider from "react-slick";



  // Thiết lập cấu hình slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const SliderCustom = ({ images }) => {
    return (
        <div className='w-full'>
           
                <div className='bg-black flex justify-center h-[320px]'>
                    <img
                        src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/03/507ce676-0681-4fe6-bac3-55a7eef70fc3_1656803285.jpg"
                        alt="slider"
                        className='object-contain h-full'
                    />
                </div>
            
        </div>
    );
};

export default memo(SliderCustom);