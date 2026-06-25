"use client";

import Image from "next/image";
import { Clock, ChefHat, Heart } from "lucide-react";
import { colors } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
    var route=useRouter()
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8F4EC",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
      }}
    >
      {/* Top Left */}
      <Image
        src="/images/pastaa.png"
        alt=""
        width={240}
        height={240}
        style={{
          position: "absolute",
          top: -30,
          left: -30,
        }}
      />

      {/* Top Right */}
      <Image
        src="/images/pizza.png"
        alt=""
        width={250}
        height={250}
        style={{
          position: "absolute",
          top: -20,
          right: -20,
        }}
      />

      {/* Bottom Left */}
      <Image
        src="/images/burger.png"
        alt=""
        width={280}
        height={280}
        style={{
          position: "absolute",
          bottom: -20,
          left: -20,
        }}
      />

      {/* Bottom Right */}
      <Image
        src="/images/noodles.png"
        alt=""
        width={260}
        height={260}
        style={{
          position: "absolute",
          bottom: -20,
          right: -20,
        }}
      />

      {/* Center */}
      <div
        style={{
          maxWidth: 700,
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            color: "#ff7a00",
            fontSize: 22,
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          HUNGER BUDDY
        </h2>

        <h1
          style={{
            fontSize: 70,
            margin: 0,
            fontWeight: 700,
            color: "#222",
          }}
        >
          Something
        </h1>

        <h1
          style={{
            fontSize: 82,
            margin: 0,
            color: "#ff7a00",
            fontFamily: "cursive",
          }}
        >
          Delicious
        </h1>

        <h2
          style={{
            marginTop: 5,
            color: "#222",
            fontSize: 42,
          }}
        >
          is coming soon!
        </h2>

        <p
          style={{
            marginTop: 25,
            fontSize: 20,
            color: "#666",
            lineHeight: 1.7,
          }}
        >
          We're cooking something amazing for you.
          <br />
          {/* New dishes, exciting offers and a better ordering experience are on
          the way. */}
          Our website is under construction.
          <br/>
          <b style={{color:'black'}}>Stay tuned!</b>
        </p>

        {/* Cards */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            marginTop: 50,
            flexWrap: "wrap",
          }}
        >
          <Card
            icon={<Clock size={35} />}
            title="Working Hard"
            text="Preparing amazing features"
          />

          <Card
            icon={<ChefHat size={35} />}
            title="New Dishes"
            text="New Dishes coming soon"
          />

          <Card
            icon={<Heart size={35} />}
            title="Better Experience"
            text="Made with ❤️ for food lovers"
          />
        </div>

        <button
          style={{
            marginTop: 45,
            background: "#ff7a00",
            color: "white",
            border: "none",
            padding: "16px 40px",
            borderRadius: 40,
            fontSize: 18,
            cursor: "pointer",
            fontWeight: 600,
          }}
          onClick={() => route.push('/homepage')}
        >
          Explore Later
        </button>
      </div>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 180,
        background: "white",
        borderRadius: 20,
        padding: 25,
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          color: "#ff7a00",
          marginBottom: 15,
        }}
      >
        {icon}
      </div>

      <h3 style={{color:'#000'}}>{title}</h3>

      <p
        style={{
          color: "#777",
        }}
      >
        {text}
      </p>
    </div>
  );
}