"use client";
import { useEffect, useState } from 'react'
import { postData, serverURL } from '../services/FetchNodeServices';
import MenuItem from "./MenuItem";
import TransactionCard from "./TransactionCard";
import OrderCard from "./OrderCard";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


import {
    ShoppingBag,
    Heart,
    CreditCard,
    MapPin,
    Settings,
    LogOut,
} from "lucide-react";
export default function UserMenu() {
    const dispatch = useDispatch();
    const router = useRouter();
    const theme = useTheme();
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [screen, setScreen] = useState("menu");
    const [showTransaction, setShowTransaction] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [order, setOrder] = useState([]);
    const [showOrders, setShowOrders] = useState(false);

    const matches = useMediaQuery(theme.breakpoints.down("md"));
    // const handleLogout = () => {
    //      localStorage.removeItem("USER");
    //      dispatch({
    //     type: "EMPTY_CART"
    // });
    // router.push("/homepage");
    // }
    const handleLogout = () => {
        Swal.fire({
            title: "Logout?",
            text: "Do you really want to logout?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Logout",
            cancelButtonText: "Cancel",
        }).then((result) => {

            if (result.isConfirmed) {

                localStorage.removeItem("USER");
                setUserData(null);

                dispatch({
                    type: "EMPTY_CART"
                });

                window.location.reload();

            }

        });

    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const local = localStorage.getItem('USER')
            if (local) {
                try {
                    const user = JSON.parse(local)
                    const data = Object.values(user)[0]
                    setUserData(data)
                    fetchAlltransaction(data?.enrollmentno)
                } catch (error) {
                    console.log(error)
                    setUserData(null)
                }
            }

            setLoading(false)
        }
    }, [])

    const handleorder = () => {
        setShowOrders(!showOrders)
        setShowTransaction(setShowTransaction(false))
    }
    const handletransaction = () => {
        setShowTransaction(!showTransaction)
        setShowOrders(setShowOrders(false))
    }
    const fetchAlltransaction = async (cid) => {
        var response = await postData('users/fetch_orders_by_enrollment', { enrollmentno: cid })
        setTransactions(response?.data)
        setOrder(response?.data)
    }
    if (loading) return null
    return (
        <div
            style={{
                position: "absolute",
                top: 70,
                right: matches ? 0 : 10,
                width: matches ? 250 : 320,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                overflow: "hidden",
                zIndex: 999,

            }}
        >
            <div
                style={{
                    padding: 20,
                    borderBottom: "1px solid #eee",
                }}
            >
                <img
                    src={`${serverURL}/images/${userData?.student_picture}`}
                    width={80}
                    height={80}
                    style={{
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                />

                <h3 style={{ margin: "10px 0 5px 0" }}>
                    {userData?.studentname}
                </h3>

                <p>{userData?.mobileno}</p>

                <p>{userData?.emailid}</p>
            </div>


            {
                screen === "menu" ? (

                    <>
                        <MenuItem
                            icon={<ShoppingBag size={20} color="#ff9800" />}
                            title="My Orders"
                            subtitle="Track your orders"
                            onClick={handleorder}
                        />

                        {
                            showOrders && (

                                <div
                                    style={{
                                        background: "#fafafa",
                                        padding: 10,
                                        maxHeight: 300,
                                        overflowY: "auto",
                                    }}
                                >

                                    <div
                                        style={{
                                            fontWeight: "bold",
                                            marginBottom: 10,
                                        }}
                                    >
                                        Recent Orders
                                    </div>
                                    {
                                        order.length > 0 ? (
                                            order?.map((item, index) => (

                                                <OrderCard
                                                    key={`${item.transaction_id}-${index}`}
                                                    transactionid={item.transaction_id}
                                                    items={item.fooditemname}
                                                    amount={item.amount}
                                                    status={item.delivery_status}
                                                    date={item.orderdate}
                                                />
                                            ))
                                        ) : (
                                            <div
                                                style={{
                                                    padding: 15,
                                                    textAlign: "center",
                                                    color: "#777"
                                                }}
                                            >
                                                No Orders Found
                                            </div>
                                        )}
                                        
                                    

                                </div>

                            )
                        }

                        {/* <MenuItem
                            icon={<Heart size={20} color="#ff4d6d" />}
                            title="Wishlist"
                            subtitle="Saved favourite items"
                        /> */}

                        <MenuItem
                            icon={<CreditCard size={20} color="#3f51b5" />}
                            title="Transactions"
                            subtitle="Payment history"
                            onClick={handletransaction}
                        />
                        {
                            showTransaction && (

                                <div
                                    style={{
                                        background: "#fafafa",
                                        padding: "10px",
                                        maxHeight: 300,
                                        overflowY: "auto",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontWeight: "bold",
                                            marginBottom: 10,
                                        }}
                                    >
                                        Recent Transactions
                                    </div>
                                    {
                                        transactions.length > 0 ? (

                                            transactions?.map((item, index) => (

                                                <TransactionCard

                                                    key={`${item.orderid}-${index}`}
                                                    orderid={item.orderid}
                                                    amount={item.amount}
                                                    date={item.orderdate}
                                                    paymentType={item.payment_type}
                                                    paymentId={item.paymentid}
                                                    status={
                                                        item.paymentid && item.paymentid !== "None"
                                                            ? "Success"
                                                            : "Pending"
                                                    }
                                                />

                                            ))

                                        ) : (

                                            <div
                                                style={{
                                                    padding: 15,
                                                    textAlign: "center",
                                                    color: "#777"
                                                }}
                                            >
                                                No Transactions Found
                                            </div>

                                        )
                                    }
                                </div>

                            )
                        }

                        {/* <MenuItem
                            icon={<MapPin size={20} color="#00b894" />}
                            title="Saved Address"
                            subtitle="Manage delivery address"
                        /> */}

                        {/* <MenuItem
                            icon={<Settings size={20} color="#555" />}
                            title="Settings"
                            subtitle="Account settings"
                        /> */}

                        <MenuItem
                            icon={<LogOut size={20} color="#d32f2f" />}
                            title="Logout"
                            danger={true}
                            showArrow={false}
                            onClick={handleLogout}
                        />
                    </>

                ) : (

                    <TransactionList
                        goBack={() => setScreen("menu")}
                    />

                )
            }


        </div>
    );
}



// function MenuItem({ title }) {
//     return (
//         <div
//             style={{
//                 padding: 15,
//                 cursor: "pointer",
//                 borderBottom: "1px solid #eee",
//             }}
//         >
//             {title}
//         </div>
//     );
// }