"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useRef, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../services/FetchNodeServices";
import { useRouter } from 'next/navigation';
export default function ScrollProductList({ data }) {
  const theme = useTheme();
  var navigate = useRouter()
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: matches? 3 : 4,
    slidesToScroll: matches? 3 : 4,
    arrows: true
  };
  const [hovered, setHovered] = useState(null)
  // const images = [
  //   `${serverURL}/images/minialoosev.png`,
  //   `${serverURL}/images/yellowsev.png`,
  //   `${serverURL}/images/ratlamisev.png`,
  //   `${serverURL}/images/yellowsev.png`,
  // ]
  const handleFoodChange = (foodid) => {
    navigate.push(`/productdetailcomponent/${foodid}`)

  }

  const mySlider = () => {
    return data?.map((item, index) => {
      return <div onClick={() => handleFoodChange(item.fooditemid)} style={{ width: '130px', padding: 5 }}>
        <img

          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          style={{
            border: hovered === index ? '0.8px solid grey' : '',
            borderRadius: 15,
            transform: hovered === index ? 'scale(1.0)' : 'scale(1)',
            transition: '0.25s',
            background: '#fff',
            width: matches ? '80px' : '100px',
            height: matches ? '80px' : '100px',
            objectFit: 'cover'
          }}

          src={`${serverURL}/images/${item.picture}`}
          alt={`similar product ${index + 1}`}
        /></div>
    })
  }



  return (


    <div style={{ width: '95%' }}>

      <Slider   {...settings}>
        {mySlider()}
      </Slider>


    </div>
  )

}


