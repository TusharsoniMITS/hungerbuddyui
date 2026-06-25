"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";
import { postData, serverURL } from "../services/FetchNodeServices";

export default function SearchBar() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleSearch = async (value) => {
    setSearch(value);

    if (!value.trim()) {
      setSearchData([]);
      return;
    }

    try {
      const result = await postData("users/fetch_all_fooditem_by_food_and_Category",{categoryname: value,fooditemname: value,});

      setSearchData(result?.data || []);
    } catch (error) {
      console.log(error);
      setSearchData([]);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <Image
          src="/images/searchicon.png"
          width={14}
          height={14}
          alt=""
          className={styles.icon}
        />

        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className={styles.searchInput}
        />

        <div className={styles.separator}></div>

        <Image
          src="/images/mic1.png"
          width={14}
          height={14}
          alt=""
          className={styles.icon}
        />
      </div>

      {searchData.length > 0 && (
        <div className={styles.searchResult}>
          {searchData.slice(0, 5).map((item, index) => (
            <div
              key={`${item.fooditemid}-${index}`}
              className={styles.searchCard}
              onClick={() =>
                router.push(`/productdetailcomponent/${item.fooditemid}`)
              }
            >
              <img
                src={`${serverURL}/images/${item.picture}`}
                alt={item.fooditemname}
                className={styles.searchImage}
              />

              <div className={styles.foodInfo}>
                <div className={styles.foodName}>
                  {item.fooditemname}
                </div>

                <div className={styles.foodCategory}>
                  {item.categoryname}
                </div>
              </div>

              <div className={styles.searchPrice}>
                ₹{item.offerprice || item.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}