import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import useCart from '../../../../../hooks/useCart';
import useAuth from '../../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = () => {
    const [error,setError]=useState('');
    const [clientSecret,setCLientSecret]= useState('');
    const [transactionId,setTransactionId]=useState('');
    const stripe =  useStripe();
    const elements = useElements();
   const axiosSecure = useAxiosSecure();
   const{user}= useAuth();
   const [cart,refetch] = useCart();
   const navigate = useNavigate();
   const totalPrice = cart.reduce((total, item) => total + item.price,0)

   
    useEffect(() => {
      if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res => {
 
         console.log(res.data.clientSecret);
         setCLientSecret(res.data.clientSecret)
        })
      } 
    },[axiosSecure,totalPrice])


    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} =await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error);
            setError(error.message)
        }else{
            console.log('Payment method', paymentMethod);
            setError('');
        }

        // confirm payment
        const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log('confirm error');
        }

        else{
            console.log('payment intent',paymentIntent);
            if(paymentIntent.status === "succeeded"){
                console.log('transaction id',paymentIntent.id);
                setTransactionId(paymentIntent.id);


                // now save the payment in the database
                const payment = {
                  email: user.email,
                  price: parseInt(totalPrice),
                  transactionId: paymentIntent.id,
                  date: new Date(),
                  cartIds: cart.map(item => item._id),
                  menuItemIds: cart.map(item => item.menuId),
                  status: 'pending'
                }

                const res =await axiosSecure.post('/payments', payment);
               
                 refetch();
                
                if(res.data?.paymentResult?.insertedId){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for payment",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/payment-history')
                }
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
             <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button disabled={!stripe || !clientSecret} className='btn btn-sm btn-primary my-4' type="submit" >
        Pay
      </button>

      <p className='my-5 mx-2 text-red-500 font-bold'>{error}</p>
      {transactionId && <p className='text-green-700'>Your transaction id: {transactionId}</p> }
        </form>
    );
};

export default CheckoutForm;