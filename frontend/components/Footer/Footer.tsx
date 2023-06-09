import { Images } from "@/constants";
import Image from "next/image";
import "./Footer.scss";
import Link from "next/link";

const Footer = () => {
  const socials = [
    {
      name: "facebook",
      icon: Images.facebook,
      url: "https://www.facebook.com/profile.php?id=100092513951427&mibextid=ZbWKwL",
    },
    {
      name: "twitter",
      icon: Images.twitter,
      url: "https://twitter.com/SupplyChainSHub?t=GnUtVT0_VU9i99u--liSaQ&s=08",
    },
    {
      name: "linkedin",
      icon: Images.linkedin,
      url: "https://www.linkedin.com/company/supply-chain-solutions-hub/",
    },
  ];
  return (
    <div className="w-full bg-purple flex flex-col place-items-center justify-center sm:gap-[3rem] gap-8 lg:h-[20rem] md:h-[20rem] h-[33rem]">
      <div className="lg:gap-[13rem] gap-9  justify-center pl-5 flex flex-col lg:justify-center lg:pt-5 lg:flex-row md:flex-row md:place-items-start p-2 lg:place-items-center text-white">
        <div className="flex flex-col gap-3">
          <Image
            src={Images.logo2}
            alt="logo"
            height={120}
            className="cursor-pointer rounded-[20px]"
          />

          <div className="flex flex-col place-items-start gap-1">
            <Link href="/contact-us" target="_blank" className="text-xs hover:underline">
              Contact Us
            </Link>
            <Link
              href="/terms-and-conditions"
              target="_blank"
              className="text-xs hover:underline"
            >
              Terms and Conditions of Use
            </Link>
            <Link
              href="/privacy-and-cookie-policy"
              target="_blank"
              className="text-xs hover:underline"
            >
              Privacy and Cookies Policy
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h3 className="font-semibold text-xs">HELP DESK</h3>
            <h4 className="font-bold text-xs">Email</h4>
          </div>

          <div className="flex place-items-center gap-1">
            <Image src={Images.email} height={17} alt="email-icon" />
            <p className="text-xs">supplychainsolutionshub@gmail.com</p>
          </div>

          <div className="flex place-items-center gap-1">
            <Image src={Images.phone} height={17} alt="phone-icon" />
            <p className="text-xs">(+254)716 137 693</p>
          </div>
        </div>

        <div className="flex flex-col place-items-start justify-start gap-2">
          <div className="flex gap-2 sm:flex-col place-items-center justify-start">
            <h3 className="font-semibold text-xs text-left">OUR SOCIALS:</h3>
            <div className="flex place-items justify-start gap-3 sm:gap-2">
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
        </div>
      </div>

      <div className="border-t-2 border-white lg:w-[70rem] md:w-[45rem] sm:w-[7rem] flex text-white pt-2 text-xs justify-center flex-col lg:gap-2 gap-1 itallic sm:flex-row text-center">
        <div>© 2023 Supply Chain Solutions Hub Limited. All rights reserved</div>
        <div className="hidden sm:inline-block">|</div>
        <div>
          Designed and built by{" "}
          <Link href={"https://my-portfolio-theta-seven-51.vercel.app/"} target="_blank" className="underline">
            Iain Mosima {" "}
          </Link>
          and {" "}
          <Link href={"https://www.linkedin.com/in/nyamu-murage-bb9a321a1/"} target="_blank" className="underline">
            Allan Murage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
