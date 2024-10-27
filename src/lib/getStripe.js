import dotenv from "dotenv";
import { loadStripe } from "@stripe/stripe-js";
dotenv.config();

let stripePromise;

const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
  }

  return stripePromise;
};

export default getStripe;
