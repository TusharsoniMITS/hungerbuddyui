"use client"
import { Grid, TextField } from "@mui/material";
import { generateOTP, postData } from "../services/FetchNodeServices";
import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import { LoginPageSkeleton } from "../loginpageskeleton/LoginPageSkeleton";

function LoginPageContent() {
  const [mobileNo, setMobileNo] = useState('')
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const navigate = useRouter()
  const param = useSearchParams()
  const from = param.get("from")
  const dispatch = useDispatch()

  const handleBackend = async () => {
    window.location.href = 'https://hungerbuddyfrontend.vercel.app';
  }
  const handleClick = async () => {
    setLoading(true)
    var response = await postData("users/student_sign_in", { mobileNo })
    if (response.status) {
      var mn = response?.data?.mobileno
      dispatch({ type: 'ADD_USER', payload: [mn, response?.data] })
      navigate.push(`/otppage?from=${from}`)
    }
    else {
      setOpen(true)
      setMessage(response.message)
    }
    setLoading(false)
  }
const handlchange=()=>{
  setMessage('')
  setOpen(false)
}
  if (loading) {
  return <LoginPageSkeleton />;
}
  return (
    <div style={{ display: "flex", height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Grid size={12}>
        <div
          style={{
            background: "#FFF8F2",
            width: "85%",
            height: 550,
            borderRadius: 20,
            position: "relative",
            right: -20,
            boxShadow: "0 3px 6px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Grid size={6}>
            <div style={{ padding: 28, color: '#FF7A00', fontWeight: 'bolder' }}>
              HungerBuddy
            </div>
          </Grid>
          <Grid size={6}>
            <div style={{ marginLeft: 28, fontSize: 24, fontWeight: "1000", color: '#595959' }}>
              Almost there!
            </div>
          </Grid>
          <Grid size={6}>
            <div
              style={{
                marginLeft: 28,
                fontSize: 14,
                fontWeight: "500",
                color: "#FF9A1F",
              }}
            >
              Simply sign in to place your order
            </div>
          </Grid>
          <Grid size={6}>
            <div
              style={{
                marginLeft: 28,
                marginTop: 35,
                fontSize: 14,
                fontWeight: "550",
                color: "#595959",
              }}
            >
              Mobile Number
            </div>
          </Grid>
          <Grid size={12}>
            <div style={{ margin: 28, marginTop: 2 }}>
              <input
                type="number"
                onChange={(e) => setMobileNo(e.target.value)}
                onClick={()=> handlchange()}
                placeholder="+91-9999999999"
                style={{
                  width: "98%",
                  height: 40,
                  borderRadius: 10,
                  border: "0.4px solid #FF9A1F",
                  color: "Black",
                  fontSize: 16,
                  paddingLeft: 10,
                  fontWeight: 550,
                  background: '#fff',
                }}
              />
            </div>
            <div style={{ width: '100%', height: '0%', padding: 30, color: '#FF9A1F', marginTop: '-50px' }}>
              {message}
            </div>
            <div
              style={{
                background: "#DADADA",
                width: "100%",
                height: 1,
                marginTop: 70,
              }}
            ></div>
            <Grid size={6}>
              <div
                style={{
                  fontSize: 10,
                  margin: 28,
                  marginBottom: 15,
                  width: "90%",
                  lineHeight: "14px",
                  wordWrap: "break-word",
                  color: "#595959",
                }}
              >
                By signing in, you agree to our{" "}
                <span style={{ color: "#FF9A1F", cursor: "pointer" }}>
                  Terms and Conditions of Use
                </span>{" "}
                and{" "}
                <span style={{ color: "#FF9A1F", cursor: "pointer" }}>
                  Privacy Policy
                </span>
              </div>
            </Grid>
            <Grid size={12}>
              <div>
                <input
                  onClick={handleClick}
                  type="button"
                  value="Sign in"
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
                    cursor: 'pointer'
                  }}
                ></input>
              </div>
            </Grid>
            {!open?(
              <Grid size={12}>
              <div>
                <input
                  onClick={handleBackend}
                  type="button"
                  value="Backend Login"
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
                    marginTop: 10,
                    marginBottom: 10,
                    cursor: 'pointer'
                  }}
                ></input>
              </div>
            </Grid>
            ):(
              <></>
            )}

          </Grid>
        </div>
      </Grid>
    </div>
  );
}
export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
}