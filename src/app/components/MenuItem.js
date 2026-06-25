"use client";

import { ChevronRight } from "lucide-react";

export default function MenuItem({
    icon,
    title,
    subtitle,
    onClick,
    showArrow = true,
    danger = false,
}) {

    const handleMouseEnter = (e) => {
        e.currentTarget.style.background = "#f8f8f8";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.background = "#ffffff";
    };

    return (
        <div
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 20px",
                cursor: "pointer",
                borderBottom: "1px solid #f2f2f2",
                transition: "0.25s",
                userSelect: "none",
            }}
        >
            {/* Left Side */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: danger ? "#ffe8e8" : "#fff7e6",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {icon}
                </div>

                <div>
                    <div
                        style={{
                            fontWeight: 600,
                            fontSize: 15,
                            color: danger ? "#d32f2f" : "#222",
                        }}
                    >
                        {title}
                    </div>

                    {subtitle && (
                        <div
                            style={{
                                fontSize: 12,
                                color: "#777",
                                marginTop: 2,
                            }}
                        >
                            {subtitle}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Side */}
            {showArrow && (
                <ChevronRight
                    size={18}
                    color="#999"
                />
            )}
        </div>
    );
}