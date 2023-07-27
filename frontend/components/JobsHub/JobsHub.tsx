"use client";
import { Images } from "@/constants";
import { Job } from "@/models/Jobs";
import React, { useState } from "react";
import Image from "next/image";
import "./JobsHub.scss";

interface JobsHubProps {
  jobs: Job[];
}

const JobsHub = ({ jobs }: JobsHubProps) => {
  const [expandedIndex, setexpandedIndex] = useState(-1);
  return (
    <div className="w-full">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="border border-black rounded-xl grid grid-cols-6 sm:p-5 p-2"
        >
          <div className="sm:col-span-5 col-span-4 flex flex-col place-content-start justify-start gap-5">
            <div className="flex flex-col place-content-start justify-start gap-2">
              <h2 className="text-purple font-bold sm:text-xl text-md">
                {job.JobTitle}
              </h2>
              <p className="sm:text-[1.2rem] text-md sm:leading-7 leading-5">
                {job.OrganisationDescribtion}
              </p>
            </div>
            <h2 className="text-purple font-bold sm:text-xl text-md">
              Job Type:{" "}
              <span className="sm:text-[1.2rem] text-md text-black">
                {job.JobType}
              </span>
            </h2>
            <div className="flex flex-col place-content-start justify-start gap-2">
              <h2 className="text-purple font-bold sm:text-xl text-md">
                Job Describtion
              </h2>
              <p className="sm:text-[1.2rem] text-md sm:leading-7 leading-5">
                {job.JobDescribtion}
              </p>
            </div>
            <div className="flex flex-col place-content-start justify-start gap-2">
              <h2 className="text-purple font-bold sm:text-xl text-md">
                Duties and Responsibilities
              </h2>
              <ul className="list-inside list-disc">
                {job.DutiesAndResponsiblities.map((duty, index) => (
                  <li key={index} className="sm:text-[1rem] text-md leading-5 ml-1">{duty}.</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex h-100% flex-col justify-between place-items-end sm:col-span-1 col-span-2">
            <div className="flex flex-col justify-start gap-2">
              <div className="flex place-items-center gap-1">
                <Image
                  src={Images.opencalenderIcon}
                  alt="calender"
                  width={20}
                />
                <h3 className="sm:text-[14px] text-[10px] text-purple font-bold">
                  {job.openning}
                </h3>
              </div>
              <div className="flex place-items-center gap-1">
                <Image
                  src={Images.closedcalenderIcon}
                  alt="calender"
                  width={20}
                  className="relative"
                />

                <h3 className="sm:text-[14px] text-[10px] text-purple font-bold">
                  {job.closing}
                </h3>
              </div>
            </div>

            <button className="bg-purple text-white py-3 px-2 rounded-md w-[90%] cursor-pointer">
              APPLY
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsHub;
