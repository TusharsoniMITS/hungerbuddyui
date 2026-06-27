"use client";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddToCartComponent from "../../purchaseinterface/AddToCartComponent";
import ProductImageComponent from "../../purchaseinterface/ProductImageComponent";
import ProductInfoComponent from "../../purchaseinterface/ProductInfoComponent";
import ProductRateComponent from "../../purchaseinterface/ProductRateComponent";
import SimilarAvailableComponent from "../../purchaseinterface/SimilarAvailableComponent";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { postData } from "@/app/services/FetchNodeServices";
import FooterComponent from "@/app/components/FooterComponent";
import Header from "@/app/components/Header";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
export default function ProductDetailComponent() {

  var params = useParams()
  const { id } = useParams()

  var cart=useSelector((state)=>state.cart)

  const [foodItem, setFoodItem] = useState({})
  const [categoryList, setCategoryList] = useState([])
  const [pictureList, setPictureList] = useState([])
  const [refresh,setRefresh] = useState(false)
  const aboutRef = useRef()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const fetchFoodDetails = async () => {
    // alert(JSON.stringify(response.data))
    // setFoodItem(response.data)
    var cartkeys=Object.keys(cart)
    var data={}
    if(cartkeys.includes(id)){
      data=cart[id]
      setFoodItem(data)
    }else{
      var response = await postData("users/fetch_all_fooditems_by_id", { fooditemid: id });
      var data=response.data[0]
      data.qty=0
    if (response.data.length > 0) {
      setFoodItem(data);
    }
      await fetchAllFoodByCategoryId(data?.categoryid)
    }
  }

  const fetchAllFoodByCategoryId = async (cn) => {
    var response = await postData("users/fetch_all_fooditems_by_category_id", { categoryid: cn });
    //  alert(JSON.stringify(response.data))
    setCategoryList(response.data)
  };

  const fetchAllFoodPicture = async () => {
    var response = await postData("morepicture/fetch_more_picture", { fooditemid: id });
    console.log('zzzzz'+JSON.stringify(response.data))
    setPictureList(response.data)

  };

  useEffect(function () {
    fetchFoodDetails()
    fetchAllFoodPicture()
  }, [id])

  return (
    <div style={{backgroundColor:'#fff'}}>
      <div>
        <Header dataRef={aboutRef} />
      </div>
      <div
        style={{
          background: "#FFF8F2",
          minHeight: "100vh",
          width: matches ? "100%" : "95%",
          borderRadius: matches ? 0 : 20,
          marginLeft: matches ? "0%" : "2%",
          marginTop: matches ? 0 : 20,
          padding: 40
        }}>

        <Grid container spacing={2}>
          <Grid size={matches? 12 : 6} >
            <ProductImageComponent data={foodItem} pictures={pictureList} />
          </Grid>
          <Grid size={matches? 12 : 6} style={{ padding: 40 }}>
            <div>
              <ProductRateComponent data={foodItem} />
            </div>
            <div>
              <AddToCartComponent data={foodItem} refresh={refresh} setRefresh={setRefresh} />
            </div>
            <div style={{ width: '100%' }}>
              <SimilarAvailableComponent data={categoryList} />
            </div>
            <div>
              <ProductInfoComponent data={foodItem} />
            </div>
          </Grid>

        </Grid>

      </div>
    </div>




  );
}