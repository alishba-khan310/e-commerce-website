
import Link from "next/link"
function Navbar() {
    return (
        <nav className="bg-blue-900 text-white p-2">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#!" className="text 2xl font-bold mx-8">
                    <img
                    src="pakwheels logo.png"
                    alt="Logo"
                    className="w-45 h-20"
                    />
                </a>

                <div>
                    <ul className="flex justify-between gap-2">
                        <li><Link href="/Used Cars" className="mx-2"> Used Cars </Link></li>
                        <li><Link href="/FeaturedNewCars" className="mx-2"> New Cars </Link></li>
                        <li><Link href="/Bikes" className="mx-2"> Bikes </Link></li>
                        <li><Link href="/Auto Stores" className="mx-2"> Auto Stores </Link></li>
                        <li><Link href="/Videos" className="mx-2"> Videos </Link></li>
                        <li><Link href="/Forums" className="mx-2"> Forums </Link></li>
                        <li><Link href="/Blogs" className="mx-2"> Blogs </Link></li>
                        <li><Link href="/ More" className="mx-2"> More </Link></li>
                    </ul>
                </div>
                <div>
                    <div className="justify-items-center grid grid-cols-2 grid-rows-1 gap-3 m-0 h-8">
                         <Link href="/Sign In" className=" row-span-2"> Sign In </Link> 
                         <Link href="/Sign Up" className=" row-span-2"> Sign Up </Link> 
                    </div>
                    <div>   
                         <button className="bg-red-700 rounded-lg px-2 py-2 col-span-1 mx-1"><b> Post an Ad </b> </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar