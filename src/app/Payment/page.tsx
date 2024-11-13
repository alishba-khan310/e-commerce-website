import Link from "next/link";

export default function PaymentPage() {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mt-8">Payment Page</h1>
       
        <div className="bg-white shadow-lg rounded-lg p-8 mt-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Complete Your Payment</h2>
  
          <form className="space-y-4">
            {/* Name on Card */}
            <div>
              <label className="block text-gray-700">Name on Card</label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
  
            {/* Card Number */}
            <div>
              <label className="block text-gray-700">Card Number</label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1234 5678 9123 4567"
                required
              />
            </div>
  
            {/* Expiry Date */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="MM/YY"
                  required
                />
              </div>
  
              {/* CVV */}
              <div className="w-1/2">
                <label className="block text-gray-700">CVV</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123"
                  required
                />
              </div>
            </div>
  
            {/* Amount */}
            <div>
              <label className="block text-gray-700">Amount</label>
              <input
                type="text"
                placeholder="PKR 50,00,000"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                required
              />
            </div>
  
            {/* Payment Button */}
            <Link href="/ThankYou">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Confirm Payment
            </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }