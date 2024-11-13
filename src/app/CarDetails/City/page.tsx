import Image from 'next/image';
import Link from 'next/link';

function CarDetails() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center ">
       <u> Honda City 2024 Price in Pakistan, Images, Reviews & Specs </u>
      </h1>
      <div className="w-full max-w-md mx-auto py-5 ">
        <Image
          src="/popular cars imgs/honda city.jfif"
          alt="Honda City 2024"
          width={500}
          height={300}
          className="rounded"
        /> </div>
        <p className="text-gray-800 text-center mx-32">
        The Honda City is a stylish and spacious sedan known for its blend of performance, comfort, and advanced features. 
        It offers a refined driving experience with a smooth, efficient engine and responsive handling, making it ideal for both city commutes and highway journeys. 
        Inside, the City boasts a well-designed, roomy cabin with premium finishes, ample legroom, and advanced tech features like a touchscreen infotainment system, Apple CarPlay, and Android Auto. 
        Equipped with Honda’s safety suite, the City provides peace of mind on every trip. 
        With its strong resale value and reputation for reliability, the Honda City is an excellent choice for those seeking a sophisticated yet practical vehicle.
        </p>
        <p className="text-green-600 text-xl font-semibold my-6">PKR 49,50,000</p>
        <Link href="/Payment">
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Make Payment</button>
        </Link>
    </div>
    
  );
}
export default CarDetails