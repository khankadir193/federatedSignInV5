import React from "react";
import { Auth } from "aws-amplify";

const FederatedSignIn = () => {
  const handleFederatedSignIn = async() => {
    try{
        await Auth.federatedSignIn({provider:'azure'});
    }catch(err){
        console.error('getting error...',err);
    }
  };

  return (
    <div>
      <button onClick={handleFederatedSignIn}>Federated SignIn</button>
    </div>
  );
};

export default FederatedSignIn;
