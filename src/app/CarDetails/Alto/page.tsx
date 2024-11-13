import Image from 'next/image';
import Link from 'next/link';

function CarDetails() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center ">
       <u> Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs </u>
      </h1>
      <div className="w-full max-w-md mx-auto py-5 ">
        <Image
          src="/popular cars imgs/alto.jfif"
          alt="Suzuki Alto 2024"
          width={500}
          height={300}
          className="rounded"
        /> </div>
        <p className="text-gray-800 text-center mx-32">
        The Suzuki Alto is a compact, affordable, and highly fuel-efficient hatchback, ideal for city driving and tight parking spaces.
        Its small size makes it easy to maneuver, while its practical interior provides essential comfort and convenience features for daily commutes. 
        Known for low maintenance costs and impressive mileage, the Alto is perfect for budget-conscious drivers who value reliability and efficiency. 
        With a reputation for durability and an affordable price point, the Alto delivers excellent value, making it a popular choice for first-time car buyers and city dwellers alike.
        </p>
        <p className="text-green-600 text-xl font-semibold my-6">PKR 55,00,000</p>
        <Link href="/Payment">
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Make Payment</button>
        </Link>
    </div>
    
  );
}
export default CarDetails