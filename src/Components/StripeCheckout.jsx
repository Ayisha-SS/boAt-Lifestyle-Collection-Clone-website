import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price , removeFromCart}) => {
  const publishableKey = 'pk_test_51OSB2ISH2GrVPvS1OyY1v0XbSyOIodjNpFpekgQ4CUjCXpDYIncpONrACmwTag3EoYdrr3NPtWiS37WXOvKO7CJf00bYX1LLrh';

  const onToken =(token) => {
    console.log(token);
    removeFromCart();
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="boAt Collections"
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={price * 100}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
