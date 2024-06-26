"use client";

import { Services } from "@/models/Services";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "../Loading/Loading";
import NoResults from "../NoResults/NoResults";
import SearchBar from "./SearchBar";

interface ServicesProps {
  services: Services[] | [];
}

interface ServicesProps {
  services: Services[] | []
}

const Services = ({ services }:ServicesProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState<Services[]>(services);


  return (
    <div className="mt-1 mb-[2rem] flex flex-col overflow-y-hidden">
      <h2 className="font-semibold text-xl text-center text-purple">
        Our Services
      </h2>
      <div className="w-[1.1rem] h-[.2rem] bg-purple mx-auto" />
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
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2 mt-[2rem]">
            {results.map((result, index) => (
              <div
                key={index}
                className="border-2 h-[35rem] rounded-[12px] lg:w-full md:w-full w-[22rem] mx-auto border-gray-400 flex flex-col place-items-start"
              >
                <div className="rounded-t-[10px] w-full">
                  <Image
                    src={`${process.env.SERVICESBUCKET}/${result.serviceImageKey}`}
                    className="rounded-t-[10px] object-cover"
                    alt={result.serviceName}
                    width={900}
                    height={200}
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
          <NoResults
            searchValue={searchValue}
            setResults={setResults}
            intialResults={services}
            backLink={`/services`}
          />
        )
      ) : (
        <div className="h-full">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Services;
