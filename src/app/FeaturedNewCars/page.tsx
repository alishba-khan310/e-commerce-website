import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  const cars = [
    {
      name: "Toyota Corolla",
      price: "PKR 59.7 - 75.5 lacs",
      reviews: 621,
      rating: 4,
      image: "/popular cars imgs/corolla.jfif",
      link: "/CarDescription/Corolla",
    },
    {
      name: "Suzuki Alto",
      price: "PKR 23.3 - 30.5 lacs",
      reviews: 199,
      rating: 4,
      image: "/popular cars imgs/alto.jfif",
      link: "/CarDescription/Alto",
    },
    {
      name: "Honda City",
      price: "PKR 46.5 - 58.5 lacs",
      reviews: 458,
      rating: 4,
      image: "/popular cars imgs/honda city.jfif",
      link: "/CarDescription/City",
    },
    {
      name: "Honda Civic",
      price: "PKR 86.6 - 99.0 lacs",
      reviews: 357,
      rating: 4,
      image: "/popular cars imgs/civic.jfif",
      link: "/CarDescription/Civic"

    },
  ];

  return (
    <div>
          <div className="min-h-screen bg-gray-100">
              <div className="container mx-10 p-5 flex justify-between place-items-end">
                  <h1 className="text-3xl font-semibold mb-6">Featured New Cars</h1></div>
                  <h1 className='flex justify-end mx-10'> <Link href="/popular/upcoming/newly launched"><u> view all new cars </u></Link></h1>
                  <div className="text-blue-900 bg-gray-100 flex justify-items-start px-8 mx-10 my-8 "> 
           <h1 className="px-5"> <Link href="./popular"> Popular </Link></h1>
           <h1 className="px-5"> <Link href="/upcomming"> Upcoming </Link></h1>
           <h1 className="px-5"> <Link href="/newly"> Newly Launched </Link></h1>
           </div>
          
          <div className="flex space-x-4 mx-20" >
              {cars.map((car, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4 w-64">
                      <Link href={car.link}>
                      <Image src={car.image} alt={car.name} width={250} height={150} className="rounded-lg" />
                      <h2 className="text-xl font-bold mt-4">{car.name}</h2>
                      <p className="text-gray-700">{car.price}</p>
                      <div className="flex items-center mt-2">
                          <span className="text-yellow-400">{'⭐'.repeat(car.rating)}</span>
                          <span className="ml-2 text-gray-500">({car.reviews} Reviews)</span>
                      </div>
                      </Link>
                  </div>
                      ))}
                  </div>
              </div>
        </div>
          
  );
}

