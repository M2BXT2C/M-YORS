// client/components/DemoPayment.jsx
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_your_publishable_key_here'); // Replace with your Stripe publishable key

const DemoPayment = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await fetch('http://localhost:5000/api/create-checkout-session', {
      method: 'POST',
    });
    const data = await res.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div>
      <h2>Buy Demo Perfume</h2>
      <button onClick={handleCheckout}>Pay $20</button>
    </div>
  );
};

export default DemoPayment;
