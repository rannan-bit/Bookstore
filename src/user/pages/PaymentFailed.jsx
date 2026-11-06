import UserHeader from '../components/UserHeader'
import { Link } from 'react-router-dom'

function PaymentFailed() {
    return (
        <div>
            <UserHeader />
            <main className="flex min-h-[70vh] items-center justify-center bg-gray-100 px-4 py-8 sm:min-h-[75vh] sm:px-6 lg:px-8">
                <div className="w-full max-w-xl rounded-lg bg-white p-5 shadow-sm sm:p-8 md:p-10">
                    <svg viewBox="0 0 24 24" className="mx-auto my-5 h-14 w-14 text-red-600 sm:my-6 sm:h-16 sm:w-16" aria-hidden="true">
                        <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.54 13.54a.75.75 0 0 1-1.06 0L12 13.06l-2.48 2.48a.75.75 0 1 1-1.06-1.06L10.94 12 8.46 9.52a.75.75 0 1 1 1.06-1.06L12 10.94l2.48-2.48a.75.75 0 0 1 1.06 1.06L13.06 12l2.48 2.48a.75.75 0 0 1 0 1.06Z" />
                    </svg>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Payment Failed</h3>
                        <p className="my-2 text-sm text-gray-600 sm:text-base">Your payment could not be completed.</p>
                        <p className="text-sm sm:text-base">Please try again or return to the book collection.</p>
                        <div className="py-7 text-center sm:py-10">
                            <Link to={'/all-books'} className="inline-flex w-full items-center justify-center rounded bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 sm:w-auto sm:px-12">
                                Back to books
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PaymentFailed