"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function AddToCartComponent({
  data,
  refresh,
  setRefresh,
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();
  const dispatch = useDispatch();

  const [hovered, setHovered] = useState(false);
  const [quantity, setQuantity] = useState(data?.qty || 0);
  const [weight, setWeight] = useState();
  const [buynow, setBuynow] = useState(false);

  useEffect(() => {
    setWeight(
      Number(data?.offerprice) > 0
        ? Number(data.offerprice)
        : Number(data.fullprice)
    );
  }, [data?.fooditemid]);

  useEffect(() => {
    setQuantity(data?.qty || 0);
  }, [data?.qty]);

  const weightOptions = [
    Number(data?.offerprice) > 0
      ? Number(data.offerprice)
      : Number(data.fullprice),
    Number(data?.halfprice),
  ].filter((item) => item > 0);

  const handleBuyNow = () => {
    router.push("/carts");

    const q = quantity + 1;

    data.qty = q;

    setQuantity(q);

    dispatch({
      type: "ADD_CART",
      payload: [data.fooditemid, data],
    });

    setRefresh(!refresh);
  };

  const handleAddClick = () => {
    setBuynow(false);

    const q = quantity + 1;

    data.qty = q;

    setQuantity(q);

    dispatch({
      type: "ADD_CART",
      payload: [data.fooditemid, data],
    });

    setRefresh(!refresh);
  };

  const handleMinusClick = () => {
    const q = quantity - 1;

    if (q <= 0) {
      setBuynow(true);

      setQuantity(0);

      dispatch({
        type: "DELETE_CART",
        payload: [data.fooditemid, data],
      });
    } else {
      const updatedData = {
        ...data,
        qty: q,
      };

      setQuantity(q);

      dispatch({
        type: "ADD_CART",
        payload: [updatedData.fooditemid, updatedData],
      });
    }

    setRefresh(!refresh);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 15,
          padding: matches ? 15 : 20,
          marginTop: 15,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Weight & Quantity */}
        <div
          style={{
            display: "flex",
            flexDirection: matches ? "column" : "row",
            justifyContent: "space-between",
            alignItems: matches ? "flex-start" : "center",
            gap: matches ? 20 : 40,
            width: "100%",
          }}
        >
          {/* Price Buttons */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {weightOptions.map((w, index) => (
              <div key={index}>
                <div
                  onClick={() => setWeight(w)}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                      weight === w ? "rgb(13,156,67)" : "#fff",
                    color: weight === w ? "#fff" : "#000",
                    border: "1px solid gray",
                    transition: ".25s",
                  }}
                >
                  ₹{w}
                </div>
              </div>
            ))}
          </div>

          {/* Cart Section */}

          {quantity === 0 ? (
            <button
              onClick={handleAddClick}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                width: matches ? "100%" : 220,
                height: 48,
                borderRadius: 25,
                border: "1px solid rgb(13,156,67)",
                background: "#fff",
                color: "rgb(13,156,67)",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                transition: ".2s",
                boxShadow: hovered
                  ? "0 0 0 3px rgba(13,156,67,.25)"
                  : "none",
              }}
            >
              Add to Cart
            </button>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: matches ? "flex-start" : "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Quantity
              </span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <button
                  onClick={handleMinusClick}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    border: "none",
                    background: "#eee",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/minus.png"
                    alt="minus"
                    width={18}
                    height={18}
                  />
                </button>

                <span
                  style={{
                    minWidth: 25,
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  {quantity}
                </span>

                <button
                  onClick={handleAddClick}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    border: "none",
                    background: "#eee",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/plus.png"
                    alt="plus"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Buy Now */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          width: "100%",
        }}
      >
        {!data.qty == buynow ? (
          <></>
        ) : (
          <button
            onClick={handleBuyNow}
            style={{
              width: matches ? "100%" : 250,
              maxWidth: 300,
              height: 50,
              borderRadius: 25,
              border: "none",
              background: "rgb(13,156,67)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Buy it Now
          </button>
        )}
      </div>

      <Divider
        style={{
          marginTop: 25,
        }}
      />
    </div>
  );
}