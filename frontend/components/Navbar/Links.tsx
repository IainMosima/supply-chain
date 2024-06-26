import React from "react";
import Link from "next/link";
import "./Navbar.scss";
import { motion } from "framer-motion";

interface LinksProps {
  hubsToggle: boolean,
  setHubsToggle: React.Dispatch<React.SetStateAction<boolean>>,
  selectedCountry: string | undefined
}

const links = ({ selectedCountry, hubsToggle, setHubsToggle }: LinksProps) => {
  return (
    <>
      <div className="hidden md:hidden lg:flex lg:justify-evenly lg:place-items-center font-semibold text-center text-black gap-6">
        <div>
          
        </div>
        <a
          href="/"
          className="hover:text-white hover:bg-purple px-2 py-2 rounded ease-in duration-150"
        >
          HOME
        </a>

        <Link
          href="/services"
          className="hover:text-white hover:bg-purple px-2 py-2 rounded ease-in duration-150"
        >
          SERVICES
        </Link>

        <div
          className={`cursor-pointer relative px-2 py-2 rounded hover:text-white hover:bg-purple ease-in duration-150 ${
            hubsToggle ? "text-white bg-purple" : ""
          }`}
          onClick={() => setHubsToggle((prev) => !prev)}
        >
          HUBS
          {hubsToggle && (
            <motion.div
              whileInView={{ y: [0, 10] }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className={`absolute z-1 translate-down z-30 bg-purple text-white rounded p-3 w-[11rem] right-1 flex flex-col text-xs font-bold`}
            >
             {[
                  "JOBS HUB",
                  "TENDERS HUB",
                  "KNOWLEDGE HUB",
                ].map((hub) => {
                  if (hub === 'KNOWLEDGE HUB') {
                    return (
                      <Link
                        href={`${hub.toLowerCase().replace(" ", "-")}`}
                        key={hub}
                        className="px-1 pb-5"
                        >
                        {hub}
                      </Link>
                    )
                  }
                  return (
                    <Link
                      href={`${hub.toLowerCase().replace(" ", "-")}/${selectedCountry}`}
                      key={hub}
                      className="px-1 pb-5"
                      >
                      {hub}
                    </Link>
                  )
                })}
            </motion.div>
          )}
        </div>

        <Link
          href="/contact-us"
          className="hover:text-white w-[7.9rem] hover:bg-purple px-2 py-2 rounded ease-in duration-150"
        >
          CONTACT US
        </Link>

        
      </div>

      
    </>
  );
};

export default links;
