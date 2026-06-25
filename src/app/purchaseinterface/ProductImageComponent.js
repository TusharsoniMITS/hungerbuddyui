// "use client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles"
// import { serverURL } from "../services/FetchNodeServices";


// export default function ProductImageComponent({ data, pictures }) {

//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));
//   //const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


//   const images = [
//     `${serverURL}/images/paneertikka.png`,
//     `${serverURL}/images/PalakPaneer.png`,
//     `${serverURL}/images/MasalaDosa.png`,
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };
//   const showPictures = () => {
//     return pictures?.picture?.split(",")?.map((item) => {
//       return <img
//         src={`${serverURL}/images/${item}`}
//         alt="Food Image"
//         style={{ width: '100%', height: 200 , borderRadius: 25 }}
//       />
//     })
//   }
//   return (
//     <div style={{ marginTop: 30, marginLeft: matches ? "0" : "5%" }}>
//       {matches ? (
//         // MOBILE: ke liye  !!
//         <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
//           <Slider {...settings}>
//             {images.map((item) => (
//               <div >
//                 <img
//                   src={item}
//                   alt=""
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     borderRadius: 15,
//                     // margin: "0 auto",

//                   }}
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       ) : (
//         // Original wala !!
//         <div>
//           <img
//             src={`${serverURL}/images/${data?.picture}`}
//             alt={`${data.fooditemname}`}
//             style={{
//               width: 626,
//               height: 635,
//               borderRadius: 25,
//               marginBottom: 20,
//             }}
//           />
//           <div style={{ display: "flex", gap: 20, width: '100%', height: '100%',alignItems:'center', justifyContent:'center' }}>
//             {showPictures()}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { serverURL } from "../services/FetchNodeServices";

export default function ProductImageComponent({ data, pictures }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const images = [
    `${serverURL}/images/paneertikka.png`,
    `${serverURL}/images/PalakPaneer.png`,
    `${serverURL}/images/MasalaDosa.png`,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const showPictures = () => {
    return pictures?.picture?.split(",")?.map((item, index) => (
      <img
        key={index}
        src={`${serverURL}/images/${item}`}
        alt="Food Image"
        style={{
          width: isMobile ? 80 : 120,
          height: isMobile ? 80 : 120,
          objectFit: "cover",
          borderRadius: 20,
        }}
      />
    ));
  };

  return (
    <div
      style={{
        marginTop: 30,
        marginLeft: isTablet ? 0 : "5%",
        width: "100%",
      }}
    >
      {isTablet ? (
        // Mobile & Tablet
        <div
          style={{
            width: "100%",
            maxWidth: 420,
            margin: "0 auto",
            padding: "0 15px",
            boxSizing: "border-box",
          }}
        >
          {!pictures?(
             <div
          style={{
            width: "100%",
            maxWidth: 650,
          }}
        >
          <img
            src={`${serverURL}/images/${data?.picture}`}
            alt={data?.fooditemname}
            style={{
              width: "100%",
              maxWidth: 626,
              height: "auto",
              aspectRatio: "626 / 635",
              objectFit: "cover",
              borderRadius: 25,
              marginBottom: 20,
            }}
          />

          <div
            style={{
              display: "flex",
              gap: 20,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {showPictures()}
          </div>
        </div>
          ):(
            <Slider {...settings}>
            {pictures?.picture?.split(",")?.map((item, index) => (
              <div key={index}>
                <img
                  src={`${serverURL}/images/${item}`}
                  alt=""
                  style={{
                    width: "100%",
                    height: isMobile ? 260 : 380,
                    objectFit: "contain",
                    borderRadius: 20,
                  }}
                />
              </div>
            ))}
          </Slider>
          )}
          
        </div>
      ) : (
        // Desktop
        <div
          style={{
            width: "100%",
            maxWidth: 650,
          }}
        >
          <img
            src={`${serverURL}/images/${data?.picture}`}
            alt={data?.fooditemname}
            style={{
              width: "100%",
              maxWidth: 626,
              height: "auto",
              aspectRatio: "626 / 635",
              objectFit: "cover",
              borderRadius: 25,
              marginBottom: 20,
            }}
          />

          <div
            style={{
              display: "flex",
              gap: 20,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {showPictures()}
          </div>
        </div>
      )}
    </div>
  );
}