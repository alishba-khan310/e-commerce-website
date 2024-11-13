import Link from "next/link"
function HeroSection() {
    return (
        <section > 
        <h1 className="bg-white text-black text-center mx-36 my-8 p-5 flex justify-around text-2xl">
            <b> Sell Your Car on PakWheels and Get the Best Price </b></h1>

            <div className="flex justify-around">

                <h1><b className="text-blue-700 text-xl py-4"> Post Your Ad on PakWheels </b>
                <p className="text-black"> 
                    
                        <li>Post your ad for free in 3 easy steps</li>
                        <li>Get geniune offers by varified buyers</li>
                        <li>Sell your car fast at best price</li>
                    
                    <button className="bg-red-700 text-white rounded-lg px-4 py-2 m-4 col-span-1 mx-1"> Post Your Ad </button>
                </p></h1>

                <h1 className="my-10 font-bold"> OR </h1>

                <h1><b className="text-blue-700 text-xl py-4"> Try PakWheels Sell It For Me</b>
                <p className="text-black"> 
                    
                        <li>Dedicated sells expert to sell your car</li>
                        <li>We bargain for you and share the best offer</li>
                        <li>We ensure safe & secure transaction</li>
                    
                    <button className="bg-blue-600 text-white rounded-lg px-4 py-2 m-4 col-span-1 mx-1"> Register Your Car </button>
                </p></h1>

            </div>
        </section>)}
export default HeroSection