// 'use client'
// import Image from 'next/image'
// import wallet from '../../../public/images/wallet.png'
// import { Badge } from '@mui/material'
// import { useRouter } from 'next/navigation'
// import { useSelector } from 'react-redux'
// import { useEffect, useState } from "react";
// import Avatar from "@mui/material/Avatar";
// export default function User({ totalItems }) {
//     // const [user,setUser]=useState(null)
//     var navigate = useRouter()
//     // var user = useSelector((state) => state.user)
//     var local=localStorage.getItem('USER')
//     var user = JSON.parse(local)
//     var userData
//     if (user == null) {
//         userData = "Not Login"
//     }
//     else {
//         userData = Object.values(user)[0]
//         // alert(JSON.stringify(userData))
//     }
//     return (
//         <div>
//             <div style={{ cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', top: '30px', left: -1, position: 'absolute', width: 45, height: 15, background: '#000', border: '1px solid white', borderRadius: 20 }}>
//                     <span style={{ color: '#fff', fontSize: 9, fontWeight: 'bold' }}>&#8377;20</span>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 20, background: '#000' }}>
//                     <Image src='/images/wallet.png' width={25} height={25} alt=' ' />
//                 </div>
//                 {userData == 'Not Login' ?
//                     <div onClick={() => navigate.push('/signin?from=HP')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 20, background: 'black' }}>
//                         <Image src='/images/accountcopy.png' width={25} height={25} alt=' ' />
//                     </div> : <div><Avatar style={{backgroundColor:'blue'}}>{userData?.studentname[0]}</Avatar></div>}

//                 <Badge badgeContent={totalItems} color="primary">
//                     <div onClick={() => navigate.push('/cart')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 20, background: 'black' }}>
//                         <Image src='/images/cart.png' width={28} height={28} alt=' ' />
//                     </div>
//                 </Badge>
//             </div>
//         </div>
//     )
// }


'use client'

import Image from 'next/image'
import Avatar from '@mui/material/Avatar'
import { Badge } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

import { serverURL } from '../services/FetchNodeServices'
import UserMenu from './UserMenu'

export default function User({ totalItems }) {

    const navigate = useRouter();

    const theme = useTheme();

    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const tablet = useMediaQuery(theme.breakpoints.down("md"));

    const menuRef = useRef(null);

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [cartHovered, setCartHovered] = useState(false);
    const [userHovered, setUserHovered] = useState(false);
    const [walletHovered, setWalletHovered] = useState(false);


    // Responsive Sizes
    // const boxSize = mobile ? 40 : tablet ? 45 : 50;

    // const iconSize = mobile ? 20 : tablet ? 24 : 28;

    // const avatarSize = mobile ? 40 : tablet ? 45 : 50;

    // const gap = mobile ? 8 : 14;

    // const badgeWidth = mobile ? 34 : 42;

    // const badgeHeight = mobile ? 12 : 16;

    // const badgeFont = mobile ? 8 : 10;

    useEffect(() => {

        const local = localStorage.getItem("USER");

        if (local) {

            try {

                const user = JSON.parse(local);

                const data = Object.values(user)[0];

                setUserData(data);

            }

            catch (error) {

                console.log(error);

            }

        }

        setLoading(false);

    }, []);

    useEffect(() => {

        function handleClickOutside(event) {

            if (

                menuRef.current &&

                !menuRef.current.contains(event.target)

            ) {

                setOpen(false);

            }

        }

        document.addEventListener(

            "mousedown",

            handleClickOutside

        );

        return () => {

            document.removeEventListener(

                "mousedown",

                handleClickOutside

            );

        };

    }, []);

    if (loading) return null;
    return (

        <div>

            <div

                style={{

                    display: "flex",

                    alignItems: "center",

                    gap: mobile ? 8 : 14,

                    position: "relative",

                }}

            >

                {/* ================= Wallet ================= */}

                <div

                    style={{

                        position: "relative",

                    }}

                >

                    <div
                        onClick={() => navigate.push('/coming-soon')}
                        onMouseEnter={() => setWalletHovered(true)}
                        onMouseLeave={() => setWalletHovered(false)}


                        style={{

                            position: "absolute",

                            bottom: -5,

                            left: "50%",

                            transform: "translateX(-50%)",

                            width: mobile ? 34 : 42,

                            height: mobile ? 12 : 16,

                            background: "#000",

                            borderRadius: 20,

                            display: "flex",

                            justifyContent: "center",

                            alignItems: "center",

                            border: "1px solid #ffff",
                            zIndex: 2

                        }}

                    >

                        <span

                            style={{

                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: mobile ? 8 : 10,
                                cursor: 'pointer'

                            }}

                        >

                            ₹00

                        </span>

                    </div>

                    <div
                        onClick={() => navigate.push('/coming-soon')}
                        onMouseEnter={() => setWalletHovered(true)}
                        onMouseLeave={() => setWalletHovered(false)}

                        style={{

                            width: mobile ? 40 : tablet ? 45 : 50,

                            height: mobile ? 40 : tablet ? 45 : 50,

                            borderRadius: 14,

                            display: "flex",

                            justifyContent: "center",

                            alignItems: "center",
                            cursor: 'pointer',

                            // background: "linear-gradient(135deg,#FF7A00,#FF9A1F)"

                            background: walletHovered
                                ? "linear-gradient(135deg,#FF9A1F,#FFB042)"
                                : "linear-gradient(135deg,#FF7A00,#FF9A1F)",
                            transform: walletHovered ? "scale(1.05)" : "scale(1)",

                        }}

                    >

                        <Image

                            src="/images/wallet.png"

                            width={mobile ? 20 : tablet ? 24 : 28}

                            height={mobile ? 20 : tablet ? 24 : 28}

                            alt="wallet"

                        />

                    </div>

                </div>

                {/* ================= Login / Avatar ================= */}

                {

                    !userData ?

                        (

                            <div

                                onClick={() => navigate.push('/signin?from=HP')}
                                onMouseEnter={() => setUserHovered(true)}
                                onMouseLeave={() => setUserHovered(false)}
                                style={{

                                    width: mobile ? 40 : tablet ? 45 : 50,

                                    height: mobile ? 40 : tablet ? 45 : 50,

                                    borderRadius: 14,

                                    // background: "linear-gradient(135deg,#FF7A00,#FF9A1F)",
                                    display: "flex",

                                    justifyContent: "center",

                                    alignItems: "center",

                                    cursor: "pointer",
                                    background: userHovered
                                        ? "linear-gradient(135deg,#FF9A1F,#FFB042)"
                                        : "linear-gradient(135deg,#FF7A00,#FF9A1F)",
                                    transform: userHovered ? "scale(1.05)" : "scale(1)",

                                }}

                            >

                                <Image

                                    src="/images/accountcopy.png"

                                    width={mobile ? 20 : tablet ? 24 : 28}

                                    height={mobile ? 20 : tablet ? 24 : 28}

                                    alt="login"

                                />

                            </div>

                        )

                        :

                        (

                            <div

                                ref={menuRef}

                                style={{

                                    position: "relative",

                                    cursor: "pointer"

                                }}

                            >

                                <Avatar

                                    sx={{

                                        width: mobile ? 40 : tablet ? 45 : 50,

                                        height: mobile ? 40 : tablet ? 45 : 50,

                                        bgcolor: "#1976d2"

                                    }}

                                >

                                    <img

                                        src={`${serverURL}/images/${userData.student_picture}`}

                                        alt="profile"

                                        onClick={() => setOpen(!open)}

                                        style={{

                                            width: "100%",

                                            height: "100%",

                                            borderRadius: 50,

                                            objectFit: "cover",

                                        }}

                                    />

                                </Avatar>

                                {

                                    open &&

                                    <UserMenu />

                                }

                            </div>

                        )

                }
                {/* ================= Cart ================= */}

                <Badge

                    badgeContent={totalItems}

                    color="primary"

                >

                    {/* <div
                        onClick={() => navigate.push('/cart')}
                        style={{

                            width: boxSize,

                            height: boxSize,

                            borderRadius: 14,

                            background: "linear-gradient(135deg,#FF7A00,#FF9A1F)",

                            display: "flex",

                            justifyContent: "center",

                            alignItems: "center",

                            cursor: "pointer",

                            transition: "0.3s"
                        }}

                    > */}
                    <div
                        onClick={() => navigate.push('/carts')}
                        onMouseEnter={() => setCartHovered(true)}
                        onMouseLeave={() => setCartHovered(false)}
                        style={{
                            width: mobile ? 40 : tablet ? 45 : 50,
                            height: mobile ? 40 : tablet ? 45 : 50,
                            borderRadius: 14,
                            // Example: Scale up and shift background color on hover
                            background: cartHovered
                                ? "linear-gradient(135deg,#FF9A1F,#FFB042)"
                                : "linear-gradient(135deg,#FF7A00,#FF9A1F)",
                            transform: cartHovered ? "scale(1.05)" : "scale(1)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                    >

                        <Image

                            src="/images/cart.png"

                            width={mobile ? 20 : tablet ? 24 : 28}

                            height={mobile ? 20 : tablet ? 24 : 28}

                            alt="cart"

                        />

                    </div>

                </Badge>

            </div>

        </div>

    );

}