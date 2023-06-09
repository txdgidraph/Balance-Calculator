import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LoginComponent from "@/components/login";
import CalculatorInterface from "@/components/calculator-interface";
import { useEffect, useState } from "react";
import SignUp from "@/components/sign-up";
import GetRecords from "@/components/get-records";
export default function Home() {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const [displayCreateAccountSection, setdisplayCreateAccountSection] =
    useState(true);

  const [message, setMessage] = useState(false);
  
  useEffect(() => {
    message && setShowLoginPage(false)
  }, [message])
  

    const handleMessage = (newMessage) => {
      setMessage(newMessage);}

  const handleLoginPage = () => {
    setShowLoginPage(true);
    setShowSignUpPage(false);
    setdisplayCreateAccountSection(false);
  };
  const handleSignUpPage = () => {
    setShowSignUpPage(true);
    setShowLoginPage(false);
  };

  return (
    <div className="homepage-container" style={{ top: 0 }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <h2 style={{ color: "white", paddingTop: "2em", marginLeft: "3em" }}>
        Welcome to Balance Calculator
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5em",
          width: "100%",
        }}
      >
        {showLoginPage && (
          <>
            <div style={{ display: "flex" }}>
              <button
                type="button"
                class="btn btn-light"
                style={{ marginRight: "1em" }}
                onClick={handleSignUpPage}
              >
                Create Account
              </button>

              <button
                type="button"
                class="btn btn-light"
                onClick={handleLoginPage}
              >
                Already Have An Account
              </button>
            </div>
            <LoginComponent onMessage={handleMessage} />
          </>
        )}
        {showSignUpPage && (
          <>
            <div style={{ display: "flex" }}>
              <button
                type="button"
                class="btn btn-light"
                style={{ marginRight: "1em" }}
                onClick={handleSignUpPage}
              >
                Create Account
              </button>

              <button
                type="button"
                class="btn btn-light"
                onClick={handleLoginPage}
              >
                Already Have An Account
              </button>
            </div>
            <SignUp />
          </>
        )}
      </div>
      {message && (
        <>
          <div className="animate__animated animate__fadeInDown">
            <CalculatorInterface />
          </div>
          <GetRecords />
        </>
      )}
    </div>
  );
}
