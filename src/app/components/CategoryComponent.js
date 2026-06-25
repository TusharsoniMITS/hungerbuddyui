'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { postData, serverURL } from "../services/FetchNodeServices";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";

export default function CategoryComponent({ data, dataRef, FoodList, setFoodList, setCategoryClicked}) {

    const theme = useTheme();
    var navigate = useRouter()
    var path = usePathname();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const sliderRef = useRef();

    const [index, setIndex] = useState(0);
    const fetchAllFoodByCategory = async (cid) => {
        var response = await postData('users/fetch_all_fooditems_by_category_id', { categoryid: cid })
        setFoodList(response.data)
    }

    const settings = {
        // dots: false,
        // infinite: true,
        // speed: 500,
        // slidesToShow: matches ? 5 : 7,
        // slidesToScroll: 1,
        // arrows: false,

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: matches ? 5 : 7,
        slidesToScroll: 1,
        arrows: false
    };


    const handleCategoryClick = async(cid) => {
        if (path == '/homepage') {
            await fetchAllFoodByCategory(cid)
            setIndex(cid);
            setTimeout(() => {
            dataRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
        } else {
            navigate.push(`/homepage`)
        }
    };

    const showCategory = () => {
        if (!Array.isArray(data)) return null;

        return data.map((item) => (
            <div key={item.categoryid}>
                <div
                    onClick={() => handleCategoryClick(item.categoryid)}
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        borderBottom:
                            item.categoryid === index ? "4px solid red" : "",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "70%",
                            height: "70%",
                            borderRadius: "100%",
                        }}
                    >
                        <img
                            src={`${serverURL}/images/${item.categoryicon}`}
                            alt={item.categoryname}
                            style={{ width: matches? "5rem" : "8rem" }}
                        />
                    </div>

                    <div
                        style={{
                            fontSize: matches ? "0.6rem" : "1rem",color: '#111827'
                        }}
                    >
                        {item.categoryname}
                    </div>
                </div>
            </div>
        ));
    };

    const handlePrevious = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <div style={{ width: "95%", position: "relative" }}>

            {!matches && (
                <img
                    src="/images/left-arrow.png"
                    alt="left"
                    width={25}
                    height={25}
                    onClick={handlePrevious}
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: 0,
                        zIndex: 2,
                        cursor: "pointer",
                    }}
                />
            )}

            <Slider ref={sliderRef} {...settings}>
                {showCategory()}
            </Slider>

            {!matches && (
                <img
                    src="/images/right-arrow.png"
                    alt="right"
                    width={25}
                    height={25}
                    onClick={handleNext}
                    style={{
                        position: "absolute",
                        top: "40%",
                        right: 0,
                        zIndex: 2,
                        cursor: "pointer",
                    }}
                />
            )}

        </div>
    );
}