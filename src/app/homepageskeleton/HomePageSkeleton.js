"use client";

import Skeleton from "@mui/material/Skeleton";

export default function HomePageSkeleton() {
    return (
        <div style={{ background: "#FFF8F2" }}>
            {/******** header ********/}
            <Skeleton
                variant="rectangular"
                width="100%"
                height={90}
            />
            {/******** Search bar ********/}

            <Skeleton
                variant="text"
                width={820}
                height={60}
                style={{ marginLeft: 300, borderRadius: '10px' }}
            />
            {/******** Drinks ********/}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "20px 30px",
                }}
            >
                {[...Array(7)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Skeleton variant="circular" width={90} height={90} />
                        <Skeleton width={70} height={22} />
                    </div>
                ))}
            </div>
            {/******** Snack Biscuits ********/}
            <Skeleton
                variant="text"
                width={180}
                height={40}
                style={{ marginLeft: 100 }}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "20px 30px",
                }}
            >
                {[...Array(7)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Skeleton variant="circular" width={90} height={90} />
                        <Skeleton width={70} height={22} />
                    </div>
                ))}
            </div>
            {/******** Drinks ********/}
            <Skeleton
                variant="text"
                width={180}
                height={40}
                style={{ marginLeft: 100 }}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "20px 30px",
                }}
            >
                {[...Array(7)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Skeleton variant="circular" width={90} height={90} />
                        <Skeleton width={70} height={22} />
                    </div>
                ))}
            </div>
            {/******** FoodItem cards ********/}
            <Skeleton
                variant="text"
                width={180}
                height={40}
                style={{ marginLeft: 100 }}
            />
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 20,
                    padding: "0 50px",
                }}
            >
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            background: "#fff",
                            borderRadius: 18,
                            overflow: "hidden",
                        }}
                    >
                        <Skeleton variant="rectangular" width="100%" height={220} />

                        <div style={{ padding: 12 }}>
                            <Skeleton width="80%" height={28} />
                            <Skeleton width="60%" height={22} />
                            <Skeleton width="40%" height={22} />
                            <Skeleton width="70%" height={24} />
                        </div>
                    </div>
                ))}
            </div>
        {/******** Advertigement Banner ********/}
            <Skeleton
                variant="rounded"
                width="90%"
                height={450}
                style={{ margin: "20px auto" }}
            />


        {/******** Footer ********/}
            <Skeleton
                variant="rectangular"
                width="100%"
                height={550}
            />
        </div>
    );
}