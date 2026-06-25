import styles from './Header.module.css'
import Image from 'next/image'
import wallet from '../../../public/images/wallet.png'
import User from './User'
import CategoryComponent from './CategoryComponent'
import { useState, useEffect, useRef } from "react";
import { getData } from "../services/FetchNodeServices";
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'
import FoodItemCard from './FoodItemCard'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRouter } from 'next/navigation'

export default function Header({ dataRef, foodList, setFoodList, setCategoryClicked }) {
    const aboutRef = useRef()
    const theme = useTheme();
    const router = useRouter()
    const [categoryList, setCategoryList] = useState([])
    const [userData, setUserData] = useState(null);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    var cart = useSelector((state) => state.cart)
    var totalItems = Object.keys(cart)
    var total = totalItems?.length
    const fetchAllCategory = async () => {
        var response = await getData("users/fetch_all_category");
        setCategoryList(response.data);
    };
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

    }, []);
    useEffect(function () {
        fetchAllCategory();
    }, []);
    const handleHome=()=>{
        if(matches){
            router.push('/homepage')
        }
    }
    return (<div className={styles.maincontainer}>
        <div className={styles.stylebar}>
            <div className={styles.manage}>
                {!matches && (
                     <div className={styles.logoContainer} onClick={()=>router.push('/homepage')}>
                    <Image src="/images/hungerbuddyicon2.png" alt="Hunger Buddy" width={150} height={75} className={styles.logo} />
                </div>
                )} 
                <div className={styles.textStyle}>
                    <div onClick={handleHome} className={styles.styleone} style={{display: matches? 'flex' : 'block',alignItems: matches? 'center' : 'normal',fontSize: matches? '1rem' : ' ',cursor: matches? 'pointer': 'default'}}>
                        Hunger<span style={{ color: '#E86500' }}>BuddyIn</span>
                    </div>
                    <div className={styles.styletwo} style={{display: matches? 'flex' : 'block',alignItems: matches? 'center' : 'normal',cursor: matches? 'default': 'default'}}>
                        <Image src='/images/delivery-man.png' alt='n' width={20} height={20} /> Delivering Happiness in 20 Minutes
                    </div>
                    <div style={{display: matches? 'flex' : 'block',alignItems: matches? 'center' : 'normal',cursor: matches? 'default': 'default'}}>
                        <span className={styles.stylethree}>Home</span> - <span className={styles.stylename}>{userData? userData.studentname : <span className={styles.stylename}>Jhon</span>}</span>
                    </div>
                </div>
            </div>
            <User totalItems={total} />
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '2%', marginTop: '1%' }}>
            <SearchBar />
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <CategoryComponent dataRef={dataRef} data={categoryList} foodList={foodList} setFoodList={setFoodList} setCategoryClicked={setCategoryClicked} />
        </div>
    </div>)
}