"use client";

import { Suspense, useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AdvertisementComponent from "../components/AdvertisementComponent";
import DrinksComponent from "../components/DrinksComponent";
import FoodItemCard from "../components/FoodItemCard";
import FooterComponent from "../components/FooterComponent";
import Header from "../components/Header";
import SnacksComponent from "../components/SnacksComponent";
import { getData, postData } from "../services/FetchNodeServices";

function HomePageContent() {
  const [snacksList, setSnacksList] = useState([]);
  const [drinkList, setDrinkList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [categoryClicked, setCategoryClicked] = useState(false);

  const navigate = useRouter();

  const dataRef = useRef(null);

  const searchParams = useSearchParams();

  const fetchAllFood = async (cn) => {
    const response = await postData("users/fetch_all_fooditem_by_category",{ categoryname: cn }
    );

    if (cn === "Snacks") {
      
      setSnacksList(response.data);
    } else if (cn === "Drinks") {
      setDrinkList(response.data);
    }
  };

  const fetchAllFoodByCategory = async (cid) => {
    const response = await postData(
      "users/fetch_all_fooditems_by_category_id",
      { categoryid: cid }
    );

    setFoodList(response.data);
  };

  const fetchAllFoodItems = async () => {
    const response = await getData("users/fetch_all_fooditem");
    setFoodList(response.data);
  };

  useEffect(() => {
    fetchAllFood("Snacks");
    fetchAllFood("Drinks");
    fetchAllFoodItems();

    const cid = searchParams.get("category");

    if (cid) {
      fetchAllFoodByCategory(cid);
    }
  }, [searchParams]);

  useEffect(() => {
    if (categoryClicked && foodList.length > 0) {
      dataRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setCategoryClicked(false);
    }
  }, [foodList, categoryClicked]);

  return (
    <div style={{ background: "#FFF8F2" }}>
      <Header
        dataRef={dataRef}
        foodList={foodList}
        setFoodList={setFoodList}
        setCategoryClicked={setCategoryClicked}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SnacksComponent data={snacksList} />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DrinksComponent data={drinkList} />
      </div>

      <div ref={dataRef}>
        <FoodItemCard data={foodList} />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AdvertisementComponent />
      </div>

      <FooterComponent />
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}