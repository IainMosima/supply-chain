import { Images } from "@/constants";
import { Tender } from "@/models/Tenders";
import dateConverter from "@/utils/dateConverter";
import Image from "next/image";
import Link from "next/link";

interface JobsCardProps {
  tender: Tender;
  index: number;
  expanded: boolean;
  handleExpand: (index: number) => void;
}

const TendersCard = ({ tender, index, expanded, handleExpand }: JobsCardProps) => {

  return (
    <div className="w-full">
      <div className="border border-black rounded-xl grid grid-cols-6 sm:p-5 p-2 ease-linear duration-300">
        {expanded ? (
          <div className="sm:col-span-5 col-span-4 flex flex-col place-content-start justify-start gap-5 mb-[3.2rem]">
            <div className="flex flex-col place-content-start justify-start gap-2">
              <h2 className="text-purple font-bold sm:text-xl text-md">
                {tender.tenderTitle}
              </h2>
              <p className="sm:text-[1.2rem] text-md sm:leading-7 leading-5">
                {tender.tenderDescription}{" "}
                <span className="text-purple italic font-semibold hover:underline duration-150 ease-out sm:text-[1rem] text-md cursor-pointer" onClick={() => handleExpand(-1)}>
                  Read Less
                </span>
              </p>
            </div>
            <h2 className="text-purple font-bold sm:text-xl text-md">
              Organization:{" "}
              <span className="sm:text-[1.2rem] text-md text-black">
                {tender.organization}
              </span>
            </h2>
            <div className="flex flex-col place-content-start justify-start gap-2">
              <h2 className="text-purple font-bold sm:text-xl text-md">
                How to Apply
              </h2>
              <p className="sm:text-[1.2rem] text-md sm:leading-7 leading-5">
                {tender.howToSubmit}
              </p>
            </div>
            
          </div>
        ) : (
          <>
            <div className="sm:col-span-5 col-span-4 flex flex-col place-content-start justify-start gap-5 mb-[3.2rem]">
              <div className="flex flex-col place-content-start justify-start gap-2">
                <h2 className="text-purple font-bold sm:text-xl text-md">
                  {tender.tenderTitle}
                </h2>
                <p className="sm:text-[1.2rem] text-md sm:leading-7 leading-5">
                  {tender.tenderDescription}{" "}
                  <span className="text-purple italic font-semibold hover:underline duration-150 ease-out sm:text-[1rem] text-md cursor-pointer" onClick={() => handleExpand(index)}>
                    Read More
                  </span>
                </p>
              </div>
            </div>
          </>
        )}

        <div className="flex h-full flex-col justify-between place-items-end sm:col-span-1 col-span-2">
          <div className="flex flex-col justify-start gap-2">
            <div className="flex place-items-center gap-1">
              <Image src={Images.opencalenderIcon} alt="calendar" width={20} />
              <h3 className="sm:text-[14px] text-[10px] text-purple font-bold">
              {dateConverter(tender.openingDate)}
              </h3>
            </div>
            <div className="flex place-items-center gap-1">
              <Image
                src={Images.closedcalenderIcon}
                alt="calendar"
                width={20}
                className="relative"
              />

              <h3 className="sm:text-[14px] text-[10px] text-purple font-bold">
              {dateConverter(tender.closingDate)}
              </h3>
            </div>
          </div>

          <Link href='#' target="_blank" className="bg-purple text-center text-white py-3 px-2 rounded-md w-[90%] cursor-pointer ">
            APPLY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TendersCard;