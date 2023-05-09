import Image from "next/image";
import './Navbar.scss';
import { Images } from "../../constants";
import Link from "next/link";
import Links from "./Links";
import Countries from "./Countries";

const Navbar = () => {
  return (
    <nav className="glassmorphism bg-white flex justify-between sm:justify-evenly p-4 place-items-center">

            <div className="flex sm:basis-1/3">
                <Image
                src={Images.logo}
                width={40}
                height={40}
                alt='logo'
                />
                
                
                <h1 className="text-purple font-extrabold text-sm">
                    SUPPLY CHAIN 
                    <br className="leading-normal"/>
                    <span className="text-black">SOLUTION HUB</span> 
                    <br className="leading-normal"/>
                    LIMITED
                </h1>
            </div>   

        <div className="flex sm:basis-1/3">
            <Countries/>
        </div>

        
        <Links/>
        

        <div className="sm:hidden">
            <Image
                src={Images.menu}
                width={40}
                height={40}
                alt="menu"
            />
        </div>

    </nav>
  )
}

export default Navbar