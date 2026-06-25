"use client";
import React, { useEffect, useState } from "react";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "./ShowCart.module.css";
import { serverURL } from "@/app/services/FetchNodeServices";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import QuantityCounter from "./QuantityCounter";
import { usePathname, useRouter } from "next/navigation";
// Minimum order amount for grocery
const MINIMUM_ORDER_AMOUNT = 99;

// Sample cart data
const sampleCartItems = [
  {
    id: 1,
    name: "Sprite 250 ml",
    offerprice: 19.0,
    fullprice: 20.0,
    seller: "Reliance Retail",
    size: "250 ml",
    quantity: 1,
    image: "sprite.avif",
  },
  {
    id: 2,
    name: "Bikaji Bikaneri Bhujia 1 kg",
    offerprice: 260.0,
    fullprice: 330.0,
    seller: "Reliance Retail",
    size: "1 kg",
    quantity: 1,
    image: "bhujia.avif",
  },
];

export default function ShowCart({ items, refresh, setRefresh }) {
  //alert(JSON.stringify(items))
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  var path = usePathname()
  var rout = useRouter()


  const totalItems = items.length;
  // Calculate total price using offerprice
  // const totalPrice = items.reduce((sum, item) => sum + item.offerprice, 0);
  // const total_amount = items.reduce((sum, item) => sum + (item.offerprice>0?item.offerprice:item.fullprice)*item.qty, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + Number(item.offerprice),
    0
  );

  const total_amount = items.reduce((sum, item) => {
    const offerPrice = Number(item.offerprice);
    const fullPrice = Number(item.fullprice);

    return sum + (offerPrice > 0 ? offerPrice : fullPrice) * Number(item.qty);
  }, 0);

  const isBelowMinimum = totalPrice < MINIMUM_ORDER_AMOUNT;
  const amountNeeded = MINIMUM_ORDER_AMOUNT - totalPrice;


  // const [quantity, setQuantity] = useState(items.qty);

  // const handleAddClick = () => {
  //   var q = quantity;
  //   q++;
  //   data['qty'] = q
  //   setQuantity(q);
  //   dispatch({ type: 'ADD_CART', payload: [data.fooditemid, data] })
  //   setRefresh(!refresh)
  // };

  // const handleMinusClick = () => {
  //   let q = quantity - 1;

  //   if (q <= 0) {
  //     setQuantity(0);

  //     dispatch({
  //       type: "DELETE_CART",
  //       payload: [data.fooditemid, data],
  //     });
  //   } else {
  //     const updatedData = {
  //       ...data,
  //       qty: q,
  //     };

  //     setQuantity(q);

  //     dispatch({
  //       type: "ADD_CART",
  //       payload: [data.fooditemid, updatedData],
  //     });
  //   }

  //   setRefresh(!refresh);
  // };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.basketTitle}>
          Quick Basket <span className={styles.itemCount}>({totalItems})</span>
        </h2>
        <span className={styles.totalPrice}>₹{total_amount.toFixed(2)}</span>
      </div>

      {/* Conditional Banner based on total price */}
      {isBelowMinimum ? (
        <div className={styles.warningBanner}>
          {/* No delivery banner when below minimum */}
        </div>
      ) : (
        <div className={styles.deliveryBanner}>
          <span className={styles.bannerText}>
            Yay! You get Free delivery with this Basket
          </span>
        </div>
      )}

      {/* Cart Card */}
      <div className={styles.cartCard}>
        {/* Quick Delivery Header */}
        <div className={styles.quickHeader}>
          <div className={styles.quickBadge}>
            <FlashOnIcon className={styles.flashIcon} />
            <span className={styles.quickText}>Quick</span>
          </div>
          <span className={styles.deliveryTime}>Delivery in 10 to 30 min</span>
        </div>

        {/* Minimum Order Warning - shown when below minimum */}
        {isBelowMinimum && (
          <div className={styles.minimumOrderBanner}>
            <div className={styles.minimumOrderHeader}>
              <WarningAmberIcon className={styles.warningIcon} />
              <span className={styles.minimumOrderText}>
                Minimum purchase amount is ₹{MINIMUM_ORDER_AMOUNT.toFixed(2)}
              </span>
            </div>
            <div className={styles.minimumOrderAction}>
              <div className={styles.addItemsText}>
                Add items worth ₹{amountNeeded.toFixed(2)} from Inventory to
                proceed
              </div>
              <div>
                <Button
                  variant="contained"
                  className={styles.addItemsBtn}
                  size="small"
                  onClick={() => rout.push('/homepage')}
                >
                  Add Items
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Cart Items */}
        {items.map((item, index) => {
          // Calculate savings for display
          // const savings = item.fullprice - item.offerprice;
          // const amt=(item.offerprice>0?item.offerprice:item.fullprice)*item.qty
          const offerPrice = Number(item.offerprice);
          const fullPrice = Number(item.fullprice);
          const qty = Number(item.qty);

          const savings = (fullPrice - offerPrice) * item.qty;
          const amt = (offerPrice > 0 ? offerPrice : fullPrice) * qty;
          return (
            <div key={item.fooditemid}>
              {index > 0 && <div className={styles.itemDivider} />}
              <div
                className={styles.cartItem}
                style={{ flexWrap: isSmallMobile ? "wrap" : "nowrap" }}
              >
                <div
                  className={styles.itemImage}
                  style={{
                    width: isSmallMobile ? "60px" : "100px",
                    height: isSmallMobile ? "60px" : "100px",
                  }}
                >
                  <img
                    src={`${serverURL}/images/${item.picture}`}
                    alt={item.fooditemname}
                    className={styles.productImg}
                  />
                </div>
                <div className={styles.itemDetails}>
                  <span className={styles.itemName}>{item.fooditemname}</span>
                  <div className={styles.priceRow}>
                    {/* {item.offerprice == 0 ? (
                      <div style={{ display: 'flex', width: '95%' }}>
                        <span className={styles.currentPrice}>
                          ₹{item.fullprice.toFixed(2)}/unit
                        </span>

                        <span className={styles.currentPrice} style={{ marginLeft: 'auto' }} >
                          ₹{amt}
                        </span>

                      </div>
                    ) : (
                      <div style={{ display: 'flex', width: '95%' }}>
                        <span className={styles.currentPrice}>
                          ₹{item.offerprice.toFixed(2)}/unit
                        </span>
                        <span className={styles.originalPrice}>
                          ₹{item.fullprice.toFixed(2)}/unit
                        </span>
                        <span className={styles.currentPrice} style={{ marginLeft: 'auto' }} >
                          ₹{amt.toFixed(2)}
                        </span>

                      </div>

                    )} */}
                    {offerPrice === 0 ? (
                      <div style={{ display: "flex", width: "95%" }}>
                        <span className={styles.currentPrice}>
                          ₹{fullPrice.toFixed(2)}/unit
                        </span>

                        <span
                          className={styles.currentPrice}
                          style={{ marginLeft: "auto" }}
                        >
                          ₹{amt.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <div style={{ display: "flex", width: "95%" }}>
                        <span className={styles.currentPrice}>
                          ₹{offerPrice.toFixed(2)}/unit
                        </span>

                        <span className={styles.originalPrice}>
                          ₹{fullPrice.toFixed(2)}/unit
                        </span>

                        <span
                          className={styles.currentPrice}
                          style={{ marginLeft: "auto" }}
                        >
                          ₹{amt.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* {item.offerprice > 0 && savings > 0 && ( */}
                  {offerPrice > 0 && savings > 0 && (
                    <div className={styles.quickBadge}>
                      <div className={styles.quickText}>
                        You Save ₹{savings.toFixed(2)}
                      </div>
                    </div>
                  )}
                  <span className={styles.sellerText}>
                    Sold by:{" "}
                    <span className={styles.sellerName}>HungerBuddy Foods</span>
                  </span>
                  <div style={{ display: "flex" }}>
                    <span className={styles.sizeText}>
                      Qty: <span className={styles.sizeValue}>{item.qty}</span>
                    </span>
                    {path == '/order-review' ? <div></div> :
                      <div style={{ marginLeft: 'auto' }}>
                        <QuantityCounter data={item} refresh={refresh} setRefresh={setRefresh} />
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
