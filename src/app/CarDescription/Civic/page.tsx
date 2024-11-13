import Link from 'next/link';

export default function CarPage() {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
      Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>

      <div className="w-full max-w-lg flex flex-col items-center border p-6 rounded-lg shadow-lg">
        <img
          src="/popular cars imgs/civic.jfif" 
          alt="Honda Civic 2024"
          className="w-full h-auto mb-6"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200">
            Book a test drive
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200">
            Request Bank Finance
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200">
            Visit Place
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200">
            Car Inspection
          </button>
          <Link href="/CarDetails/Civic">
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200">
            Car Details
          </button>
          </Link>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-2">Vehicle Description</h2>
          <p className="text-gray-700">
            <strong>Number of Doors:</strong> 4 <br />
            <strong>Engine:</strong> 1500 CC Turbo <br />
            <strong>Condition:</strong> 8.5 / 10 <br />
            <strong>Driven:</strong> 1,200 KM <br />
            <strong>Suspension Type:</strong> Sport-Tuned Suspension <br />
            <strong>Avg:</strong> 16 Km per L <br />
            <strong>Transmission:</strong> CVT Automatic <br />
            <strong>Fuel Type:</strong> Regular Petrol
          </p>
        </div>

        <div className="text-2xl font-bold text-green-600 mb-4">
          PKR 50,00,000
        </div>

        <Link href="/Payment">
          <p className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Make Payment
          </p>
        </Link>
      </div>
    </div>
  );
}