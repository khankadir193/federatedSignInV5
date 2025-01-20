import logo from "./logo.svg";
import "./App.css";
import FederatedSignIn from "./FederatedSignIn";
import { Amplify, Auth } from "aws-amplify";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignOutComp from "./Components/SignOutComp";
import UploadFiles from "./Components/UploadFiles";

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:060e3a77-4eb3-42a6-a294-fabea8fc0b6e", //REQUIRED - Amazon Cognito Identity Pool ID
    region: "us-east-1", // REQUIRED - Amazon Cognito Region
    userPoolId: "us-east-1_zwEuysPH5", //OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: "7uk3jpbvfv3e4qmhbrikf0v0va", //OPTIONAL - Amazon Cognito Web Client ID
  },
  Storage: {
    AWSS3: {
      bucket: "timekard-landing-dev", //REQUIRED -  Amazon S3 bucket name
      region: "us-east-1", //OPTIONAL -  Amazon service region
      isObjectLockEnabled: true, //OPTIONAl - Object Lock parameter
    },
  },
});

function App() {
  // Amplify.configure({
  //   region: "us-east-1",
  //   userPoolId: "us-east-1_zwEuysPH5",
  //   userPoolWebClientId: "7uk3jpbvfv3e4qmhbrikf0v0va",
  //   // oauth: {
  //   //   domain: "dev-timekard.auth.us-east-1.amazoncognito.com",
  //   //   scope: ["openid", "aws.cognito.signin.user.admin"],
  //   //   redirectSignIn: "http://localhost:3000/redirecting",
  //   //   redirectSignOut: "http://localhost:3000",
  //   //   responseType: "code",
  //   // },
  //   Storage: {
  //     AWSS3: {
  //       bucket: "timekard-landing-dev", //REQUIRED -  Amazon S3 bucket name
  //       region: "us-east-1", //OPTIONAL -  Amazon service region
  //       isObjectLockEnabled: true, //OPTIONAl - Object Lock parameter
  //     },
  //   },
  // });

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<FederatedSignIn />}></Route>
          <Route path="/redirecting" element={<SignOutComp />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <h2>Hi This is the federated Signin</h2> */}
      {/* <FederatedSignIn /> */}
      <UploadFiles />
    </div>
  );
}

export default App;
