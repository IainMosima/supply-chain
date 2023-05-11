import Image from "next/image";
import './Navbar.scss';
import { Images } from "../../constants";
import Link from "next/link";
import Links from "./Links";
import Countries from "./Countries";

const Navbar = () => {
  return (
    <nav className="w-full fixed sm:w-11/12 flex justify-between z-50 p-4 place-items-center bg-purple">

            <div className="flex justify-start sm:basis-2/6">
                <Image
                src={Images.logo}
                width={40}
                height={40}
                alt='logo'
                className="w-auto h-auto"
                />
                
                
                <h1 className="text-white font-extrabold text-sm">
                    SUPPLY CHAIN 
                    <br className="leading-normal"/>
                    <span className="text-black">SOLUTION HUB</span> 
                    <br className="leading-normal"/>
                    LIMITED
                </h1>
            </div>   

        <div>
            <Countries/>
        </div>

        <div className="basis-2/5">
          <Links/>
        </div>

        
        

    </nav>
  )
}

export default Navbar