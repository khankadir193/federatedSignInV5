import React from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const FederatedSignIn = () => {
  const navigate = useNavigate();

  const handleFederatedSignIn = async () => {
    try {
      await Auth.federatedSignIn({ provider: "azure" });
      navigate('/signout');
    } catch (err) {
      console.error("getting error...", err);
    }
  };

  return (
    <div>
      <button onClick={handleFederatedSignIn}>Federated SignIn</button>
    </div>
  );
};

export default FederatedSignIn;
