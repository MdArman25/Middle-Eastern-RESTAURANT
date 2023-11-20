import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./ChackOutForm";


// TODO: add publishable key
const stripePromise = loadStripe('pk_test_51OEB62HYQBx9XJIje5mwCddGST209INYLsInEqWeE9a9R6l7ws0uOXRQMTKgdRGQllRnQBMKRMoq72ycLMm1j2Ov00Ys2cygN9');
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;