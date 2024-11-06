import React from 'react';
import SectionTitle from '../../../shared/section-title/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutForm/CheckoutForm';

// TODO: add publishable key
const stripePayment = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading={'Please pay to eat'} heading={'Payment'}/>

            <div>
                <Elements stripe={stripePayment}>
                  <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;