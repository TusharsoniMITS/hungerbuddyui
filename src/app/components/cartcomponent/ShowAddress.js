"use client";

import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { IconButton, Divider } from "@mui/material";
import styles from "./ShowAddress.module.css";

export default function ShowAddress({address,drawerStatus,setDrawerStatus,}) {
  // If address is not available
  if (!address) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Delivery Address</h2>
        </div>

        <div className={styles.addressCard}>
          <p
            style={{
              color: "#6B7280",
              textAlign: "center",
              padding: "20px",
            }}
          >
            No address found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}

      <div className={styles.header}>
        <h2 className={styles.title}>Delivery Address</h2>
      </div>

      {/* Address Card */}

      <div className={styles.addressCard}>

        {/* Top Section */}

        <div className={styles.nameRow}>

          <div className={styles.nameContainer}>

            {/* Avatar */}

            <div className={styles.avatar}>
              {address?.studentname?.charAt(0)?.toUpperCase()}
            </div>

            {/* Name */}

            <div>

              <div className={styles.name}>
                {address?.studentname}
              </div>

              <div className={styles.addressType}>
                <HomeRoundedIcon
                  sx={{
                    fontSize: 16,
                    marginRight: "5px",
                  }}
                />

                Home

              </div>

            </div>

          </div>

          {/* Edit Button */}

          <IconButton
            onClick={() => setDrawerStatus(true)}
            className={styles.editButton}
          >
            <EditIcon />
          </IconButton>

        </div>

        {/* Divider */}

        <Divider className={styles.divider} />

        {/* Address */}

        <div className={styles.addressDetails}>

          <div className={styles.infoRow}>

            <LocationOnIcon className={styles.icon} />

            <div>

              <div className={styles.addressText}>
                {address?.current_address}
              </div>

              <div className={styles.city}>
                {address?.current_city}, {address?.current_state} -{" "}
                {address?.current_pincode}
              </div>

            </div>

          </div>

          {/* Phone */}

          <div className={styles.infoRow}>

            <PhoneIcon className={styles.icon} />

            <span className={styles.phoneText}>
              {address?.mobileno}
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}