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
    <div className="w-full bg-purple lg:h-[15rem] h-[26rem] lg:gap-[13rem] gap-9 md:h-[40rem] justify-center sm:h-[17rem] pl-5 flex flex-col lg:justify-center lg:pt-5 lg:flex-row md:flex-col md:place-items-start p-2 lg:place-items-center text-white">
      <Image
        src={Images.logo2}
        alt="logo"
        height={120}
        className="cursor-pointer rounded-[20px]"
      />

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm">HELP DESK</h3>
          <h4 className="font-bold text-sm">Email</h4>
        </div>

        <div className="flex place-items-center gap-1">
          <Image src={Images.email} height={25} alt="email-icon" />
          <p className="text-xs">supplychainsolutionshub@gmail.com</p>
        </div>

        <div className="flex place-items-center gap-1">
          <Image src={Images.phone} height={25} alt="phone-icon" />
          <p className="text-xs">(+254)716 137 693</p>
        </div>
      </div>


      <div className="flex flex-col place-items-start gap-2">
        <div className="flex gap-2 sm:flex-col place-items-center">
          <h3 className="font-semibold text-sm text-left">OUR SOCIALS:</h3>
          <div className="flex place-items-center gap-3">
            {socials.map((image) => (
              <Link href={image.url} target="_blank" key={image.name}>
                <Image
                  src={image.icon}
                  alt={image.name}
                  height={30}
                  className="hover:bg-black rounded-full"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col place-items-start gap-1">
          <Link href="/contact-us" target="_blank" className="text-xs">
            <div className="flex place-items-center gap-1">
              <p>Contact Us</p>
              <Image src={Images.newPage} height={15} alt="new-page" />
            </div>
          </Link>

          <Link href="/terms-and-conditions" target="_blank" className="text-xs">
            <div className="flex place-items-center gap-1">
              <p>Terms and Conditions</p>
              <Image src={Images.newPage} height={15} alt="new-page" />
            </div>
          </Link>
       </div>
      </div>
    </div>
  );
};

export default Footer;
