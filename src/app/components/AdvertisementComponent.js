"use client"
import style from "./AdvertisementComponent.module.css";
import { serverURL } from "../services/FetchNodeServices";
import { useRouter } from "next/navigation";
import { Pointer } from "lucide-react";
export default function AdvertisementComponent() {
  var route=useRouter()
//  const serverUrl = process.env.serverUrl;

  return (
    <div className={style.adparent}>
      <div className={style.adleft}>
        <img
          src={`${serverURL}/images/advertige.png`}
          className={style.adimage}
        />
      </div>

      <div className={style.adright}>
        <div className={style.adcontent}>
          <div className={style.adheading}>{/*Our gift to you*/}A Delicious Treat Awaits You</div>

          <div className={style.addesc}>
            Join the Hunger Buddy family today and enjoy exclusive deals, exciting rewards, and tasty surprises with every order. Your next favorite meal is just a click away!*

            {/*Make the season merrier with a 
            <b> free handcrafted drink with purchase.</b>
            It’s our treat during your first week as a 
            Starbucks® Rewards member.*/}
          </div>

          <div>
            <button onClick={()=>route.push('/coming-soon')}  className={style.adbtn}>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
