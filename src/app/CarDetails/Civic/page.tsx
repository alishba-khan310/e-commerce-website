import Image from 'next/image';
import Link from 'next/link';

function CarDetails() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center ">
       <u> Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs </u>
      </h1>
      <div className="w-full max-w-md mx-auto py-5 ">
        <Image
          src="/popular cars imgs/civic.jfif"
          alt="Honda Civic 2024"
          width={500}
          height={300}
          className="rounded"
        /> </div>
        <p className="text-gray-800 text-center mx-32">
        The Honda Civic is a sleek, sporty, and dependable compact car that combines performance with efficiency. 
        Known for its smooth handling, excellent fuel economy, and spacious, comfortable interior, the Civic is a top choice for both daily commuting and long drives.
        It comes equipped with modern technology features like Apple CarPlay, Android Auto, and Honda Sensing® safety suite, offering both entertainment and peace of mind on the road. 
        With its solid build quality, strong resale value, and proven reliability, the Civic provides a dynamic yet practical driving experience that appeals to a wide range of drivers.
        </p>
        <p className="text-green-600 text-xl font-semibold my-6">PKR 45,00,000</p>
        <Link href="/Payment">
        <button className="bg-blue-700 text-white px-4 py-2 rounded">Make Payment</button>
        </Link>
    </div>
    
  );
}
export default CarDetails