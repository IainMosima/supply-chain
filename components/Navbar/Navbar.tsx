import Image from "next/image";
import './Navbar.scss';
import { Images } from "../../constants";
import Link from "next/link";
import Links from "./links";

const Navbar = () => {
  return (
    <nav className="glassmorphism z-3 bg-white flex justify-between sm:justify-evenly p-4">

        <div className="flex">
            <Image
             src={Images.logo}
             width={60}
             height={60}
             alt='logo'
            />
            
            
            <h1 className="text-purple font-extrabold">
                SUPPLY CHAIN 
                <br/>
                <span className="text-black">SOLUTION HUB</span> 
                <br/>
                LIMITED
            </h1>
        </div>   

       <Links/>

        <div className="sm:hidden">
            <Image
                src={Images.menu}
                width={60}
                height={60}
                alt="menu"
            />
        </div>

    </nav>
  )
}

export default Navbar