// StripeCheckout.js
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = () => {
  const publishableKey = 'pk_test_51OSB2ISH2GrVPvS1OyY1v0XbSyOIodjNpFpekgQ4CUjCXpDYIncpONrACmwTag3EoYdrr3NPtWiS37WXOvKO7CJf00bYX1LLrh';

  const onToken =(token) => {
    // You can handle the token here, typically by sending it to your server for further processing.
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="boAt Collections"
      description="Purchase Description"
    //   amount={1000} // Amount in cents
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
