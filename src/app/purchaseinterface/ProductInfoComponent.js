"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ProductInfoComponent({ data }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        width: matches ? "150%" : "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxSizing: "border-box",
        marginTop: matches ? 20 : 30,
        marginLeft: matches ? -60 : 0,
      }}
    >
      {/* Ingredients */}

      <Accordion
        disableGutters
        style={{
          boxShadow: "none",
          borderBottom: "1px solid #FF9A1F",
          background: "#fcfcfc",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: matches ? 17 : 20,
            }}
          >
            Ingredients
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography
            style={{
              fontSize: matches ? 14 : 16,
              lineHeight: 1.8,
              wordBreak: "break-word",
            }}
          >
            {data?.ingridients}
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Share */}

      <Accordion
        disableGutters
        style={{
          boxShadow: "none",
          borderBottom: "1px solid #FF9A1F",
          background: "#fcfcfc", 
          marginTop: 20,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: matches ? 17 : 20,
            }}
          >
            Share
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
              width: "100%",
            }}
          >
            <img
              src="/images/linkedin-sign.png"
              alt="linkedin"
              style={{
                width: matches ? 24 : 28,
                height: matches ? 24 : 28,
                cursor: "pointer",
              }}
            />

            <img
              src="/images/social.png"
              alt="twitter"
              style={{
                width: matches ? 24 : 28,
                height: matches ? 24 : 28,
                cursor: "pointer",
              }}
            />

            <img
              src="/images/facebook.png"
              alt="facebook"
              style={{
                width: matches ? 24 : 28,
                height: matches ? 24 : 28,
                cursor: "pointer",
              }}
            />

            <img
              src="/images/instagram.png"
              alt="instagram"
              style={{
                width: matches ? 24 : 28,
                height: matches ? 24 : 28,
                cursor: "pointer",
              }}
            />

            <img
              src="/images/pinterest-logo.png"
              alt="pinterest"
              style={{
                width: matches ? 24 : 28,
                height: matches ? 24 : 28,
                cursor: "pointer",
              }}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}