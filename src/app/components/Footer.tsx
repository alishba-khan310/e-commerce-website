import Link from "next/link"
function Footer() {
    return (
        <footer className="flex justify-between text-black bg-slate-300 p-auto m-auto">
             <div>
                <Link href="alishbamobin2004@gmail.com"> Alishba Khan </Link>
            </div>
            <div>
                <Link href="www.pakwheels.com"> www.pakwheels.com </Link>
            </div>

        </footer>
    )
}
export default Footer