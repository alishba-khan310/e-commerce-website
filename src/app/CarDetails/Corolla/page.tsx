import Image from 'next/image';
import Link from 'next/link';

function CarDetails() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center ">
       <u> Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs </u>
      </h1>
      <div className="w-full max-w-md mx-auto py-5 ">
        <Image
          src="/popular cars imgs/corolla.jfif"
          alt="Toyota Corolla 2024"
          width={500}
          height={300}
          className="rounded"
        /> </div>
        <p className="text-gray-800 text-center mx-32">
        The Toyota Corolla is a compact, reliable, and fuel-efficient sedan, renowned for its longevity and affordable maintenance.
        Its stylish design, comfortable interior, and advanced safety features make it an ideal choice for daily commuting and family use.
        Equipped with modern tech options like Apple CarPlay, Android Auto, and advanced driver-assistance systems, the Corolla combines convenience with an enjoyable driving experience.
        Known for its excellent resale value and consistently high safety ratings, the Corolla offers a balance of practicality and quality that makes it a standout in its class.
        </p>
        <p className="text-green-600 text-xl font-semibold my-6">PKR 50,00,000</p>
        <Link href="/Payment">
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Make Payment</button>
        </Link>
    </div>
    
  );
}
export default CarDetails