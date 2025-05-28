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
    orderId,
    state,
    city,
    onSuccess // callback to execute after payment success
) {
    const toastId = toast.loading("Loading payment gateway...")

    try {
        // Load Razorpay SDK
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) {
            toast.error("Razorpay SDK failed to load.")
            return
        }

        // Get order from backend
        const orderResponse = await apiConnector("POST", PRODUCT_PAYMENT_API, { ammount })
        if (!orderResponse.data.success) {
            throw new Error(orderResponse.data.message)
        }

        // Configure Razorpay
        const options = {
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
            handler: async function (response) {
                const verifySuccess = await verifyPayment({
                    ...response,
                    name,
                    email,
                    ammount,
                    plotId,
                    orderId,
                    state,
                    city,
                    phone,
                })

                if (verifySuccess && typeof onSuccess === "function") {
                    onSuccess() // Call after successful verification
                }
            },
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()

        paymentObject.on("payment.failed", function (response) {
            toast.error("Oops! Payment Failed.")
            console.log(response.error)
        })
    } catch (error) {
        console.error("PAYMENT API ERROR:", error)
        toast.error("Could not make payment.")
    }

    toast.dismiss(toastId)
}

// Payment Verification
async function verifyPayment(bodyData) {
    const toastId = toast.loading("Verifying payment...")

    try {
        const response = await apiConnector("POST", PRODUCT_VERIFY_API, bodyData)

        if (!response.data.success) {
            toast.error("Payment verification failed.")
            return false
        }

        toast.success("Payment successful. Booking in process...")
        return true
    } catch (error) {
        console.error("PAYMENT VERIFY ERROR:", error)
        toast.error("Could not verify payment.")
        return false
    } finally {
        toast.dismiss(toastId)
    }
}
