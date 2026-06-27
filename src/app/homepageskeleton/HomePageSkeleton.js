"use client";

import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function HomePageSkeleton() {
    return (
        <Box sx={{ background: "#FFF8F2", minHeight: "100vh" }}>
            
            {/* Header */}
            <Skeleton
                variant="rectangular"
                width="100%"
                sx={{ height: { xs: 60, md: 90 } }}
            />

            {/* Search */}
            <Box sx={{ display: 'flex', justifyContent: 'center', m: '20px 0' }}>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: { xs: "90%", md: "70%", lg: 820 },
                        height: { xs: 45, md: 60 },
                        borderRadius: '10px'
                    }}
                />
            </Box>

            {/* Top Category Row */}
            <Box sx={{ display: "flex", justifyContent: "space-around", p: { xs: "10px", md: "20px 30px" } }}>
                {[...Array(7)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: { xs: i >= 4 ? 'none' : 'flex', sm: i >= 5 ? 'none' : 'flex', md: 'flex' },
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Skeleton variant="circular" sx={{ width: { xs: 60, md: 90 }, height: { xs: 60, md: 90 } }} />
                        <Skeleton sx={{ width: { xs: 50, md: 70 }, height: 22, mt: 1 }} />
                    </Box>
                ))}
            </Box>

            {/* Snacks Section */}
            <Skeleton variant="text" sx={{ width: 180, height: 40, ml: { xs: '20px', md: '100px' } }} />
            <Box sx={{ display: "flex", justifyContent: "space-around", p: { xs: "10px", md: "20px 30px" } }}>
                {[...Array(7)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: { xs: i >= 4 ? 'none' : 'flex', sm: i >= 5 ? 'none' : 'flex', md: 'flex' },
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Skeleton variant="circular" sx={{ width: { xs: 60, md: 90 }, height: { xs: 60, md: 90 } }} />
                        <Skeleton sx={{ width: { xs: 50, md: 70 }, height: 22, mt: 1 }} />
                    </Box>
                ))}
            </Box>

            {/* Drinks Section */}
            <Skeleton variant="text" sx={{ width: 180, height: 40, ml: { xs: '20px', md: '100px' } }} />
            <Box sx={{ display: "flex", justifyContent: "space-around", p: { xs: "10px", md: "20px 30px" } }}>
                {[...Array(7)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: { xs: i >= 4 ? 'none' : 'flex', sm: i >= 5 ? 'none' : 'flex', md: 'flex' },
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Skeleton variant="circular" sx={{ width: { xs: 60, md: 90 }, height: { xs: 60, md: 90 } }} />
                        <Skeleton sx={{ width: { xs: 50, md: 70 }, height: 22, mt: 1 }} />
                    </Box>
                ))}
            </Box>

            {/* Food Items Grid */}
            <Skeleton variant="text" sx={{ width: 180, height: 40, ml: { xs: '20px', md: '100px' } }} />
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                    gap: '20px',
                    p: { xs: "10px 20px", md: "0 50px" },
                }}
            >
                {[...Array(8)].map((_, i) => (
                    <Box key={i} sx={{ background: "#fff", borderRadius: '18px', overflow: "hidden" }}>
                        <Skeleton variant="rectangular" width="100%" sx={{ height: { xs: 180, md: 220 } }} />
                        <Box sx={{ p: '12px' }}>
                            <Skeleton width="80%" height={28} />
                            <Skeleton width="60%" height={22} />
                            <Skeleton width="40%" height={22} />
                            <Skeleton width="70%" height={24} sx={{ mt: 1 }} />
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Promo Banner */}
            <Skeleton
                variant="rounded"
                sx={{ width: "90%", height: { xs: 200, sm: 300, md: 450 }, m: "40px auto", display: 'block' }}
            />

            {/* Footer */}
            <Skeleton variant="rectangular" width="100%" sx={{ height: { xs: 300, md: 550 } }} />
            
        </Box>
    );
}