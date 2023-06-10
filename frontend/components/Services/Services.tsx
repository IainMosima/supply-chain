"use client";

import Image from "next/image";
import { Images } from "../../constants";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { Services } from "@/models/Services";
import NoResults from "../NoResults/NoResults";
import { getAllServices } from "@/network/Services";
import Loading from "../Loading/Loading";

const Services = () => {
  const [searchValue, setSearchValue] = useState("");
  const [services, setServices] = useState<Services[]>([]);
  const [results, setResults] = useState<Services[]>([]);

  useEffect(() => {
    async function fetchAllServices() {
      getAllServices().then((response) => {
        setServices(response);
        setResults(response);
      });
    }

    fetchAllServices();
  }, []);

  return (
    <div className="lg:mt-[9rem] md:mt-[9rem] mt-[7.6rem] mb-[2rem] flex flex-col">
      <h2 className="font-semibold text-xl text-center text-purple">
        Our Services
      </h2>
      <div className="w-[1.5rem] h-[.2rem] bg-purple mx-auto" />
      <div className="justify-self-center">
        <SearchBar
          services={services}
          results={results}
          setResults={setResults}
          setSearchValue={setSearchValue}
        />
      </div>

      {services.length > 0 ? (
        results.length > 0 ? (
          <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-2 mt-[2rem]">
            {results.map((result, index) => (
              <div
                key={index}
                className="border-2 h-[30rem] rounded-[12px] w-full border-gray-400 flex flex-col place-items-start"
              >
                <div className="rounded-t-[10px]">
                  <Image
                    src={`${process.env.SERVICESBUCKET}/${result.serviceImageKey}`}
                    className="rounded-t-[10px] object-cover"
                    alt={result.serviceName}
                    width={400}
                    height={400}
                  />
                </div>

                <div className="p-2 flex flex-col gap-3">
                  <div className="flex place-items-center">
                    <h3 className="text-[1.2rem] text-purple font-bold">
                      {result.serviceName}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[17px]">{result.serviceDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NoResults query={searchValue} />
        )
      ) : (
        // <NoResults query={searchValue} />
        <Loading />
      )}
    </div>
  );
};

export default Services;
