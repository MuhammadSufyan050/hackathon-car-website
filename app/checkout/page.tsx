// "use client"; // This directive ensures the component runs only on the client side in a Next.js app.
// // Install @stripe/stripe-js & @stripe/react-stripe-js
// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { createPaymentIntent } from "./action";

// // Initialize Stripe with the public key from environment variables
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

// export default function CheckoutPage() {
//   // State to store the client secret, which is required for processing the payment
//   const [clientSecret, setClientSecret] = useState<string | null>(null);

//   useEffect(() => {
//     // When the component mounts, request a new PaymentIntent from the server
//     createPaymentIntent()
//       .then((res) => {
//           setClientSecret(res.clientSecret); // Save the client secret to state
//       })
//   }, []);
//   console.log(clientSecret);

//   // While waiting for the client secret, show a loading message
//   if (!clientSecret) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto" }}>
//       <h1>Checkout</h1>
//       {/* Wrap the payment form inside the Elements provider with Stripe instance and client secret */}
//       <Elements stripe={stripePromise} 
//       options={{ clientSecret }}>
//         <PaymentForm />
//       </Elements>
//     </div>
//   );
// }

// // Component that handles the payment form
// function PaymentForm() {
//   const stripe = useStripe(); // Hook to access Stripe methods
//   const elements = useElements(); // Hook to access Stripe elements
//   const [isProcessing, setIsProcessing] = useState(false); // State to manage loading state while processing
//   const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to show error messages

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent page refresh when submitting the form

//     if (!stripe || !elements) return; // Ensure Stripe is loaded before proceeding

//     setIsProcessing(true); // Indicate that the payment is being processed

//     // Attempt to confirm the payment
//     const { error } = await stripe.confirmPayment({
//       elements,
//       redirect: "if_required", // Redirect if required by the payment method
//     });

//     if (error) {
//       setErrorMessage(error.message || "An unknown error occurred"); // Display error message if payment fails
//       setIsProcessing(false);
//     } else {
//       // Payment was successful
//       setErrorMessage(null);
//       alert("Payment successful!"); // Notify the user
//       setIsProcessing(false);
//       // You can optionally redirect the user to a success page here
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Stripe's payment element (handles input fields for card details, etc.) */}
//       <PaymentElement />
//       <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" 
//       disabled={!stripe || isProcessing}>
//         {isProcessing ? "Processing..." : "Pay Now"} {/* Show dynamic button text */}
//       </button>
//       {/* Display any error messages if they occur */}
//       {errorMessage && <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
//     </form>
//   );
// }





"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    createPaymentIntent().then((res) => setClientSecret(res.clientSecret));
  }, []);

  if (!clientSecret) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Secure Checkout</h1>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm />
        </Elements>
      </div>
    </div>
  );
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({ elements, redirect: "if_required" });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred");
      setIsProcessing(false);
    } else {
      setErrorMessage(null);
      alert("Payment successful!");
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-bold py-3 px-4 rounded-lg disabled:opacity-50"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {errorMessage && <div className="text-red-500 text-sm text-center">{errorMessage}</div>}
    </form>
  );
}
