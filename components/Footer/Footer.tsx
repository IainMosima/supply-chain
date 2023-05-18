import { Images } from "@/constants";
import Image from "next/image";
import "./Footer.scss";
import Link from "next/link";

const Footer = () => {
  const socials = [
    {
      name: "facebook",
      icon: Images.facebook,
      url: "https://www.facebook.com/",
    },
    {
      name: "twitter",
      icon: Images.twitter,
      url: "https://www.facebook.com/",
    },
    {
      name: "linkedin",
      icon: Images.linkedin,
      url: "https://www.facebook.com/",
    },
  ];
  return (
    <div className="w-full bg-purple h-96 pl-4 flex flex-col sm:flex-row justify-center sm:gap-[15rem] p-2 sm:place-items-center text-white">
      <div className="flex mb-5 justify-start cursor-pointer">
        <Image
          src={Images.logo}
          alt="logo"
          className="w-auto h-auto"
        />

        <h1 className="text-white font-extrabold text-sm">
          SUPPLY CHAIN
          <br className="leading-normal" />
          <span>SOLUTION HUB</span>
          <br className="leading-normal" />
          LIMITED
        </h1>
      </div>

      <div className="h-[10rem]">
        <h3 className="font-semibold">HELP DESK</h3>
        <br />
        <h4 className="font-bold">Email</h4>

        <div className="flex place-items-center gap-1 mt-2">
          <Image src={Images.email} alt="email-icon" />
          <p className="text-sm">supplychainsolutionshub@gmail.com</p>
        </div>

        <div className="flex place-items-center gap-1 mt-2">
          <Image src={Images.phone} alt="phone-icon" />
          <p className="text-sm">(+254)716 137 693</p>
        </div>

        <Link href="/contact-us" target="_blank" className="text-xs">
          <div className="mt-5 flex place-items gap-1">
            <p className="mt-[4px]">Contact Us</p>
            <Image src={Images.newPage} alt="new-page" />
          </div>
        </Link>

        <Link href="/terms-and-conditions" target="_blank" className="text-xs">
          <div className="flex place-items gap-1">
            <p className="mt-[4px]">Terms and Conditions</p>
            <Image src={Images.newPage} alt="new-page" />
          </div>
        </Link>
      </div>

      <div className="flex gap-3 sm:flex-col place-items-center h-[10rem]">
        <h3 className="font-semibold">OUR SOCIALS</h3>
        <br />
        <div className="inline-grid grid-cols-3 gap-3">
          {socials.map((image) => (
            <Link href={image.url} target="_blank" key={image.name}>
              <Image
                src={image.icon}
                alt={image.name}
                className="hover:bg-black rounded-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
