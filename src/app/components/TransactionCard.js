"use client";
export default function TransactionCard({
    amount,
    date,
    status,
    orderid,
}) {
    return (

        <div
            style={{
                background: "#fff",
                padding: 12,
                marginBottom: 10,
                borderRadius: 12,
                border: "1px solid #eee"
            }}
        >

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 600
                }}
            >
                 <div>
                    <strong style={{fontWeight:300}}><span style={{fontWeight:600}}>ID:</span>{orderid}</strong>
                </div>

                <span
                    style={{
                        color:
                            status === "Success"
                                ? "green"
                                : "red"
                    }}
                >
                    {status}
                </span>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 600,
                    marginTop: 10
                }}
            >
                <div>
                    <span>₹{amount}</span>
                </div>
                <div
                    style={{
                        color: "#777",
                        marginTop: 5
                    }}
                >
                    {new Date(date).toISOString().split("T")[0]}

                </div>
            </div>

        </div>

    );
}