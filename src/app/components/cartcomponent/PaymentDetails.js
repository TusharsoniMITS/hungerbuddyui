"use client";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "./PaymentDetails.module.css";

export default function PaymentDetails({ items }) {

  // const mrpTotal = items.reduce((sum, item) => sum + (item.offerprice > 0 ? item.offerprice : item.fullprice) * item.qty, 0);
  const mrpprice = items.reduce((sum, item) => sum + (item.fullprice) * item.qty, 0);
  const offerprice = items.reduce((sum, item) => sum + (item.offerprice) * item.qty, 0);
  const discount = items.reduce((sum, item) => sum + (item.offerprice > 0 ? item.fullprice - item.offerprice : 0) * item.qty, 0);
  const deliveryFee = 0

  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const total = mrpprice - discount + deliveryFee;
  const savings = discount;

  return (
    <div className={styles.container}>
      {/* Payment Details Card */}
      <div className={styles.paymentCard}>
        <h3 className={styles.paymentTitle}>Payment Details</h3>

        <div className={styles.row}>
          <span className={styles.label}>MRP Price</span>
          <span className={styles.value}>₹{mrpprice.toFixed(2)}</span>
        </div>

        {/* {offerprice? (
          <div className={styles.row}>
          <span className={styles.label}>Offer Price</span>
          <span className={styles.value}>₹{offerprice.toFixed(2)}</span>
        </div>
        ):(
        <></>
        )} */}
        

        <div className={styles.row}>
          <span className={styles.label}>Product Discount</span>
          <span className={styles.discountValue}>₹{discount.toFixed(2)}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.deliveryLabel}>Delivery Fee (Quick)</span>
          <span className={styles.freeDelivery}>FREE</span>
        </div>

        <hr className={styles.divider} />

        <div className={styles.row}>
          <span className={styles.totalLabel}>Total</span>
          <span className={styles.totalValue}>₹{total.toFixed(2)}</span>
        </div>

        <div className={styles.savingsRow}>
          <span className={styles.savingsText}>
            You Saved ₹{savings.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
