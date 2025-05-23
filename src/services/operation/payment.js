import { toast } from "react-toastify"

import { apiConnector } from "../apiConnector"
import { paymentEndpoints } from "../api"
import rzpLogo from "../../assests/logos/gdrgruop.jpg"

const {
    PRODUCT_PAYMENT_API,
    PRODUCT_VERIFY_API,

} = paymentEndpoints


// Load the Razorpay SDK from the CDN
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}




// Buy Product

export async function BuyPlot(   
    name,
    email,
    phone,
    plotId,
    ammount,

) {


    const toastId = toast.loading("Loading...")
    try {
        // Loading the script of Razorpay SDK
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            toast.error(
                "Razorpay SDK failed to load. Check your Internet Connection."
            )
            return
        }

        // Initiating the Order in Backend
        const orderResponse = await apiConnector(
            "POST",
            PRODUCT_PAYMENT_API,
            {
                ammount
            },
         
        )

        if (!orderResponse.data.success) {
            throw new Error(orderResponse.data.message)
        }
        //   console.log("PAYMENT RESPONSE FROM BACKEND............", orderResponse.data)
        // Opening the Razorpay SDK
        const options = {
            // key: process.env.RAZORPAY_KEY,
            key: "rzp_test_lQz64anllWjB83",

            currency: orderResponse.data.data.currency,
            amount: `${orderResponse.data.data.amount}`,
            order_id: orderResponse.data.data.id,
            name: "GDR GROUP 72",
            description: "Thank you",
            image: rzpLogo,
            prefill: {
                name: name,
                email: email,
            },
            handler: function (response) {
                //   sendPaymentSuccessEmail(response, orderResponse.data.data.amount, token)
                verifyPayment({
                    ...response, name, email, ammount, plotId,
                    phone,
                })
            },
        }
        const paymentObject = new window.Razorpay(options)

        paymentObject.open()
        paymentObject.on("payment.failed", function (response) {
            toast.error("Oops! Payment Failed.")
            console.log(response.error)
        })
    } catch (error) {
        console.log("PAYMENT API ERROR............", error)
        toast.error("Could Not make Payment.")
    }
    toast.dismiss(toastId)
}


// Verify the Payment
async function verifyPayment(bodyData) {
    const toastId = toast.loading("Verifying Payment...")
    console.log("enter verify")
    // dispatch(setPaymentLoading(true))
    try {
        const response = await apiConnector("POST", PRODUCT_VERIFY_API, bodyData
        )

        console.log("VERIFY PAYMENT RESPONSE FROM BACKEND............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }

        toast.success("Payment Successful. Order Placed ")
        // navigate("/")
        // dispatch(resetCart())
        // dispatch(setCheckout(false))
    } catch (error) {
        console.log("PAYMENT VERIFY ERROR............", error)
        toast.error("Could Not Verify Payment.")
    }
    toast.dismiss(toastId)
    // dispatch(setPaymentLoading(false))
}