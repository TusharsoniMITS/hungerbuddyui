// import style from "./Footer.module.css";
// import Link from "next/link";


// export default function FooterComponent() {
//     return (
//         <div className={style.mainbox}>
//             <div className={style.box}>
//                 <div className={style.leftone}>
//                     Hungerbuddy
//                 </div>
//                 <div className={style.leftsecond}>
//                     <div className={style.heading}>Company</div>
//                     <div className={style.text}>
//                         <Link href="#">About Us</Link>
//                         <Link href="#">Hungerbuddy Corporate</Link>
//                         <Link href="#">Careers</Link>
//                         <Link className={style.text} href="#">Team</Link>
//                         <Link href="#">Hungerbuddy One</Link>
//                         <Link href="#">Hungerbuddy Instamart</Link>
//                         <Link className={style.text} href="#">Hungerbuddy Dineout</Link>
//                         <Link href="#">Minis</Link>
//                         <Link href="#">Pyng</Link>
//                     </div>

//                 </div>
//                 <div className={style.leftthree}>
//                     <div className={style.heading}>Contact us</div>
//                     <div className={style.text}>
//                         <Link className={style.text} href="#">Help & Support</Link>
//                         <Link className={style.text} href="#">Partner With Us</Link>
//                         <Link className={style.text} href="#">Ride With Us</Link>

//                         <div className={style.heading}>Legal</div>

//                         <Link className={style.text} href="#">Terms & Conditions</Link>
//                         <Link className={style.text} href="#">Cookie Policy</Link>
//                         <Link className={style.text} href="#">Privacy Policy</Link>
//                     </div>
//                 </div>
//                 <div className={style.leftfour}>
//                     <div className={style.heading}>Availble in:</div>
//                     <div className={style.text}>
//                         <Link className={style.text} href="#">Bangalore</Link>
//                         <Link className={style.text} href="#">Gurgaon</Link>
//                         <Link className={style.text} href="#">Hyderabad</Link>
//                         <Link className={style.text} href="#">Delhi</Link>
//                         <Link className={style.text} href="#">Mumbai</Link>
//                         <Link className={style.text} href="#">Pune</Link>
//                     </div>
//                 </div>
//                 <div className={style.leftfive}>
//                     <div className={style.heading}>Life at Hungerbuddy</div>
//                     <div className={style.text}>
//                         <Link className={style.text} href="#">Explore with Hungerbuddy</Link>
//                         <Link className={style.text} href="#">Hungerbuddy News</Link>
//                         <Link className={style.text} href="#">Snackables</Link>

//                     </div>
//                      <div className={style.heading}>Social Links</div>
//                     <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//                         <img className={style.image} src={'/images/linkedin-sign.png'} />
//                         <img className={style.image} src={'/images/social.png'}  />
//                         <img className={style.image} src={'/images/facebook.png'} />
//                         <img className={style.image} src={'/images/instagram.png'}  />
//                         <img className={style.image} src={'/images/pinterest-logo.png'}  />
//                     </div>
//                 </div>
//             </div>
//             <div className={style.last}>
//             <div className={style.lasttext}>For better experience, download the Hungerbuddy app now</div>
//             <div><button  className={style.btn}><img className={style.image} src={'/images/app-store.png'}  />Apple Store</button></div>
//             <div><button className={style.btn}><img className={style.image} src={'/images/playstore.png'}  />Play Store</button></div>
//             </div>
//         </div>
//     )
// }

import style from "./Footer.module.css";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PhoneIcon from '@mui/icons-material/Phone';

export default function FooterComponent() {
  return (
    <footer className={style.footer}>

      {/* Top Section */}

      <div className={style.top}>

        {/* Brand */}

        <div className={style.brand}>

          <img
            src="/images/hungerbuddyicon2.png"
            className={style.logo}
          />

          <h2>HungerBuddy</h2>

          <p>
            Delivering happiness,
            one bite at a time.
          </p>

          <div className={style.social}>

            <img src="/images/instagram.png" />

            <img src="/images/facebook.png" />

            <img src="/images/linkedin-sign.png" />

            <img src="/images/social.png" />

          </div>

        </div>

        {/* Company */}

        <div>

          <h3>Company</h3>

          <Link href="#">About Us</Link>

          <Link href="#">Careers</Link>

          <Link href="#">Contact</Link>

        </div>

        {/* Support */}

        <div>

          <h3>Support</h3>

          <Link href="#">Help Center</Link>

          <Link href="#">Privacy Policy</Link>

          <Link href="#">Terms & Conditions</Link>

        </div>

        {/* Contact */}

        <div>

          <h3>Contact</h3>

          <p><PhoneIcon /> +91 9999999999</p>

          <p><EmailIcon/> support@hungerbuddy.com</p>

          <p><LocationPinIcon/> Gwalior, India</p>

        </div>

      </div>

      {/* Download */}

      <div className={style.download}>

        <h3>Download Our App</h3>

        <div className={style.buttons}>

          <button>

            <img src="/images/playstore.png" />

            Google Play

          </button>

          <button>

            <img src="/images/app-store.png" />

            App Store

          </button>

        </div>

      </div>

      {/* Copyright */}

      <div className={style.bottom}>

        © 2026 HungerBuddy. Made with ❤️ in India.

      </div>

    </footer>
  );
}