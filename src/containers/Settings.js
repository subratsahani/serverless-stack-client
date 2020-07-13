import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";
import { onError } from "../libs/errorLib";
import config from "../config";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import "./Settings.css";
//import { s3Upload } from "../libs/awsLib";

export default function Settings() {
  const history = useHistory();
  //const file = useRef(null);
  const [content, setContent] = useState("PAID");
  const [isLoading, setIsLoading] = useState(false);
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
  setStripe(window.Stripe(config.STRIPE_KEY));
  }, []);

  function billUser(details) {
    return API.post("notes", "/billing", {
      body: details
    });
  }

  function createNote(note) {
    return API.post("notes", "/notes", {
      body: note
    });
  }

  async function handleFormSubmit(storage, { token, error }) {
    if (error) {
      onError(error);
      return;
    }
  
    setIsLoading(true);
  
    try {
      await billUser({
        storage,
        source: token.id
      });

      const attachment = "";
      await createNote({ content, attachment });
      history.push("/");

      alert("Your card has been charged successfully!");
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }
  
  return (
    <div className="Settings">
      <StripeProvider stripe={stripe}>
        <Elements>
          <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
        </Elements>
      </StripeProvider>
    </div>
  );
}