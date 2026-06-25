"use client";

export default function OrderCard({
    transactionid,
    amount,
    status,
    date,
    items
}) {
    return (
        <div
            style={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 15,
                marginBottom: 12,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "bold",
                }}
            >
                <span style={{fontWeight:300}}><span style={{fontWeight:600}}>ID:</span>{transactionid}</span>

                <span
                    style={{
                        color:
                            status === "Delivered"
                                ? "green"
                                : "#ff9800",
                    }}
                >
                    <span style={{color:'black'}}>Status:</span>{status}
                </span>
            </div>

            <div
                style={{
                    marginTop: 8,
                    color: "#000",
                    fontWeight: 600,

                }}
            >
                {items}
            </div>

            <div
                style={{
                    marginTop: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 600,
                }}
            >
                <span style={{color: "#777"}}>{new Date(date).toISOString().split("T")[0]}</span>

                <strong>₹{amount}</strong>
            </div>
        </div>
    );
}