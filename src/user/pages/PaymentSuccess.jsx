import { useEffect } from 'react'
import { verifyPaymentAPI } from '../../services/allAPI'
import UserHeader from '../components/UserHeader'
import { Link } from 'react-router-dom'

function PaymentSuccess() {
    const verifyPayment = async (reqBody) => {
        const sessionID = new URLSearchParams(window.location.search).get("session_id")
        const res = await verifyPaymentAPI({ sessionID })
        console.log(res);
        
    }
    useEffect(() => {
        verifyPayment()
    },[])
    return (
        <div>
            <UserHeader />
            <main className="flex min-h-[70vh] items-center justify-center bg-gray-100 px-4 py-8 sm:min-h-[75vh] sm:px-6 lg:px-8">
                <div className="w-full max-w-xl rounded-lg bg-white p-5 shadow-sm sm:p-8 md:p-10">
                    <svg viewBox="0 0 24 24" className="mx-auto my-5 h-14 w-14 text-green-600 sm:my-6 sm:h-16 sm:w-16">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Payment Done!</h3>
                        <p className="my-2 text-sm text-gray-600 sm:text-base">Thank you for completing your secure online payment.</p>
                        <p className="text-sm sm:text-base">Have a great day!</p>
                        <div className="py-7 text-center sm:py-10">
                            <Link to={'/all-books'} className="inline-flex w-full items-center justify-center rounded bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 sm:w-auto sm:px-12">
                                Explore more books
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PaymentSuccess