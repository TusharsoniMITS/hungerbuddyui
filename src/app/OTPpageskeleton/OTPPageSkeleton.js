"use client"
import { Grid, Skeleton } from "@mui/material";

export function OTPPageSkeleton() {
  return (
    <div style={{ display: "flex", height: '100vh', width: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Grid size={12}>
        <div
          style={{
            background: "#FFF8F2",
            width: "48vh",
            height: 550,
            borderRadius: 20,
            position: "relative",
            left: 330,
            boxShadow: "0 3px 6px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo Skeleton */}
          <div style={{ padding: 28 }}>
            <Skeleton variant="text" width={120} height={35} animation="wave" />
          </div>
          
          {/* Title Skeleton */}
          <div style={{ marginLeft: 28 }}>
            <Skeleton variant="text" width={180} height={45} animation="wave" />
          </div>
          
          {/* Subtitle Skeleton */}
          <div style={{ marginLeft: 28, marginTop: 5 }}>
            <Skeleton variant="text" width={220} height={20} animation="wave" />
          </div>
          
          {/* Label Skeleton */}
          <div style={{ marginLeft: 28, marginTop: 35 }}>
            <Skeleton variant="text" width={100} height={20} animation="wave" />
          </div>
          
          {/* Input Skeleton */}
          <div style={{ margin: 28, marginTop: 2 }}>
            <Skeleton 
              variant="rounded" 
              width="98%" 
              height={40} 
              animation="wave" 
              sx={{ borderRadius: '10px' }} 
            />
          </div>
          
          {/* Divider */}
          <div
            style={{
              background: "#DADADA",
              width: "100%",
              height: 1,
              marginTop: 50, // Adjusted slightly to account for the lack of error message text height during load
            }}
          ></div>
          
          {/* Terms and Conditions Skeleton */}
          <div style={{ margin: 28, marginBottom: 15, width: "90%" }}>
            <Skeleton variant="text" width="100%" height={15} animation="wave" />
            <Skeleton variant="text" width="60%" height={15} animation="wave" />
          </div>
          
          {/* Button 1 Skeleton */}
          <Grid size={12}>
            <div style={{ marginLeft: 25, width: "87%", marginBottom: 10 }}>
              <Skeleton 
                variant="rounded" 
                width="100%" 
                height={45} 
                animation="wave" 
                sx={{ borderRadius: '20px' }} 
              />
            </div>
          </Grid>
          
          {/* Button 2 Skeleton */}
          <Grid size={12}>
            <div style={{ marginLeft: 25, width: "87%" }}>
              <Skeleton 
                variant="rounded" 
                width="100%" 
                height={45} 
                animation="wave" 
                sx={{ borderRadius: '20px' }} 
              />
            </div>
          </Grid>

        </div>
      </Grid>
    </div>
  );
}