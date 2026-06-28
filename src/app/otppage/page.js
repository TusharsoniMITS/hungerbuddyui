"use client"
import { Grid, TextField } from "@mui/material";
import { OtpInput } from 'reactjs-otp-input';
import { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { generateOTP } from "../services/FetchNodeServices";
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { LoginPageSkeleton } from "../loginpageskeleton/LoginPageSkeleton";
import { OTPPageSkeleton } from "../OTPpageskeleton/OTPPageSkeleton";
function LoginOtpPageContent() {
  const [gOtp, setGotp] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user)
  const mobileno = Object.keys(user)[0]
  const navigate = useRouter()
  // const path = usePathname()
  const param = useSearchParams()
  const from = param.get("from")
  function checkOtp() {
    if (gOtp == otp) {
      if (from == 'MP')
        // window.location.href = '/homepage'
        navigate.push('/order-review')
      else if (from == 'HP')
        navigate.push('/homepage')
    }
    else {
      alert('Not Correct')
    }
  }

  useEffect(function () {
    var otp = generateOTP()
    alert(otp)
    setGotp(otp)
    setLoading(false)
  }, [])
  const handleChange = (otp) => setOtp(otp);
    if (loading) {
    return <OTPPageSkeleton />;
  }
  return (
    <div style={{ display: "flex", height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Grid size={12}>
        <div
          style={{
            background: "#fff",
            width: "100%",
            height: 550,
            borderRadius: 20,
            position: "relative",
            right: -20,
            boxShadow:
              "0 3px 6px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Grid size={6}>
            <div style={{ padding: 28,color:'#FF7A00',fontWeight:'bolder' }}>
              HungerBuddy
            </div>
          </Grid>
          <Grid size={6}>
            <div style={{ marginLeft: 28, fontSize: 24, fontWeight: "1000",color:'#000' }}>
              Verify OTP
            </div>
          </Grid>
          <Grid size={6}>
            <div
              style={{
                marginLeft: 28,
                fontSize: 14,
                fontWeight: "500",
                color: "#595959",
              }}
            >
              Enter the OTP sent to +91-{mobileno}
            </div>
          </Grid>
          <Grid size={6}>
            <div
              style={{
                marginLeft: 28,
                fontSize: 14,
                fontWeight: "550",
                color: "#0C5273",
                cursor:'pointer'
              }}
            >
              Update Number
            </div>
          </Grid>
          <Grid size={6}>
            <div
              style={{

                marginTop: 2,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <div style={{ width: '100%', padding: 30 }}>

                <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={6}
                  separator={<span style={{ margin: '0 6px' }}>-</span>}
                  inputStyle={{
                    width: '40px',
                    height: '40px',
                    fontSize: '18px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    background:'#fff',
                    color:'#000',
                  }}
                  focusStyle={{
                    border: '2px solid #FF9A1F',
                    outline: 'none',
                  }}
                />

              </div>
            </div>
            <Grid size={6}>
              <div
                style={{
                  display: 'flex',
                  paddingRight: 30,
                  width: '100%',
                  color: "#FF9A1F",
                  fontWeight: "550",
                  justifyContent: 'flex-end'
                }}
              >
                Resend OTP
              </div>
            </Grid>
            <Grid size={12}>
              <div style={{ marginTop: 200 }}>
                <input
                  onClick={checkOtp}
                  type="button"
                  value="Verify OTP"
                  style={{
                    marginLeft: 25,
                    width: "87%",
                    height: 45,
                    border: "none",
                    borderRadius: 20,
                    background: "#FF9A1F",
                    color: "white",
                    fontSize: 15,
                    fontWeight: 550,
                    cursor:'pointer',
                  }}
                ></input>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
export default function LoginOtpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginOtpPageContent />
    </Suspense>
  );
}
