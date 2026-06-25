'use client'
import Image from 'next/image';
import styles from './FoodItemCard.module.css';
import { serverURL } from '../services/FetchNodeServices';
import { useRouter } from 'next/navigation';

export default function FoodItemCard({ data }) {
  // var mycolor = ["#FFF8E7", "#FFF4E6", "#FFEFD5", "#FFF5E1", "#FFF9C4", "#FFF3CD", "#FFE8CC", "#FFD8A8", "#FFE5B4", "#FFD6A5", "#FFE5EC", "#FFD6E0", "#FFC8DD", "#FFCAD4","#FDE2E4","#F8EDEB","#FAE1DD","#FCD5CE","#FFDDD2","#FFE5D9","#E8F9FD","#DFF9FB","#CBF1F5","#C7ECEE","#B8F2E6", "#A8E6CF","#E3FDFD","#D0F4DE","#CAF0F8","#ADE8F4","#EAF4F4","#D8E2DC","#F1FAEE","#F6FFF8","#ECFDF5","#E9F5DB","#D9ED92","#B5E48C","#99D98C","#CDEAC0","#EDE7F6","#E0BBE4","#F3E5F5","#E8DAEF","#D8B4FE","#CDB4DB","#E9D8FD","#F5F3FF","#E0E7FF","#EEF2FF"]
  var mycolor = [
"#FFF4E5",
"#FFF8D6",
"#F1FFF0",
"#EEF7FF",
"#FFF0F5",
"#F5F3FF",
"#FFF8F2",
"#F0FDFA",
"#F9FAFB",
"#FEF3C7"
]
  // const serverUrl=process.env.NEXT_PUBLIC_SERVER_URL
  {/*var data=[{fooditemid:1,  fooditemname:'Biryani', fooditemtype:'Veg', fooditemtaste:'Spicy', ingredients:'Rice,Vegitables', fullprice:400, halfprice:270, offerprice:299, picture:'biryan.png', rating:5.0, status:'Available'},
  {fooditemid:2,  fooditemname:'Burgar', fooditemtype:'Veg', fooditemtaste:'', ingredients:'Rice,Vegitables', fullprice:600, halfprice:300, offerprice:0, picture:'burger.png', rating:5.0, status:'Available'},
  {fooditemid:3,  fooditemname:'Veg Maggi', fooditemtype:'Veg', fooditemtaste:'Spicy', ingredients:'Rice,Vegitables', fullprice:120, halfprice:70, offerprice:100, picture:'maggie.png', rating:5.0, status:'Available'},
  {fooditemid:4,  fooditemname:'Pizza', fooditemtype:'NonVeg', fooditemtaste:'Medium', ingredients:'Rice,Vegitables', fullprice:300, halfprice:0, offerprice:180, picture:'nonvegpizza.png', rating:5.0, status:'Available'},
]*/}

var  router = useRouter()
  const showFood = () => {
    if (!Array.isArray(data)) return null;
    return data.map((item) => {
      var percent = (item.fullprice - item.offerprice) / item.fullprice * 100

      return (<div key={item.fooditemid} className={styles.card} onClick={()=>router.push(`/productdetailcomponent/${item.fooditemid}`)}>
        <div className={styles.imageContainer} style={{ background: '#fff' }}>
          <div className={styles.imageStyle}>
            <img
              src={`${serverURL}/images/${item.picture}`}
              alt=""
              style={{ width: '100%', height: '100' }}
            />
          </div>
          <div className={styles.discountBadge}>
            {item.offerprice == 0 ? <></> : <>{percent.toFixed(0)}% OFF UPTO ₹{item.fullprice - item.offerprice}</>}
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.name}>{item.fooditemtype == 'Veg' ? <img src={`${serverURL}/images/veg.png`} width='16' /> : <img src={`${serverURL}/images/nonveg.png`} width='16' />} <span style={{ marginLeft: '2%' }}> {item.fooditemname}</span><span style={{ marginLeft: '4%' }}>{item.fooditemtaste == 'Spicy' ? <img src={`${serverURL}/images/spicy.png`} width={16} /> : <></>}</span> </h3>
          <div className={styles.ratingContainer}>
            <img src={`${serverURL}/images/star.png`} alt='' width={20} height={20} />
            <span className={styles.rating}>{item.rating.toFixed(1)}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.deliveryTime}>30-35 mins</span>
          </div>
          <p className={styles.location}>{item.offerprice == 0 ? <span style={{ fontWeight: 'bold', color: '#000' }}>₹{item.fullprice}</span> : <><span style={{ fontWeight: 'bold', marginRight: '2%', color: '#000' }}>₹{item.offerprice}</span> <s>₹{item.fullprice}</s></>}</p>

          <p className={styles.cuisine}>{item.categoryname}</p>

        </div>
      </div>)


    })

  }


  return (<div style={{ width: '100%', marginTop: 40 }}>
    <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginLeft: '6%',color: '#000' }}>Today's Menu</div>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {showFood()}
    </div>
  </div>
  );
}

