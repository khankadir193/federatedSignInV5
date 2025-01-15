import logo from "./logo.svg";
import "./App.css";
import FederatedSignIn from "./FederatedSignIn";
import { Amplify, Auth } from "aws-amplify";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignOutComp from "./Components/SignOutComp";

function App() {
  Amplify.configure({
    region: "us-east-1",
    userPoolId: "us-east-1_zwEuysPH5",
    userPoolWebClientId: "7uk3jpbvfv3e4qmhbrikf0v0va",
    oauth: {
      domain: "dev-timekard.auth.us-east-1.amazoncognito.com",
      scope: ["openid", "aws.cognito.signin.user.admin"],
      redirectSignIn: "http://localhost:3000/redirecting",
      redirectSignOut: "http://localhost:3000",
      responseType: "code",
    },
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FederatedSignIn />}></Route>
          <Route path="/redirecting" element={<SignOutComp />}> </Route>
        </Routes>
      </BrowserRouter>
      {/* <h2>Hi This is the federated Signin</h2> */}
      {/* <FederatedSignIn /> */}
    </div>
  );
}

export default App;
