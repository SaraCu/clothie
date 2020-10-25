import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Hg6DMLrlswUWVixy1fUPPtHlJJu3uHQiLa3It9SOejAk7mrGb6Nn4sBXPLTRHQSG2o2aa8MLIr8vAFN616ykYQr00SM6ZGRDr";

    const onToken = token =>{ console.log(token);
    alert("Payment successfull")}

    return (
        <StripeCheckout
            name="clothie"
            label="Pay Now"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your price is $${price}`}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;