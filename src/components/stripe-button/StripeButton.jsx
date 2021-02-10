import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IJ9ZWGP9f3GezOJMf8r7tZkIBhXJ0gYN644TmVAxjZm0fHmxnMBdrMmptMmdBSuJYcXltXoEJbvvit7djH8DtsM00cAg5cTTZ';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Hub'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
