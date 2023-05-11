import { Images } from "../../constants";
import "./OurInfo.scss";

const OurInfo = () => {
  const info = [
    {
      icon: Images.aboutUs,
      title: "Who are we",
      info: "Supply Chain Solutions Hub provides custom solutions for all supply chain needs, with expert advisors for cost savings, efficiency, and foresight. Their one-stop-shop approach saves clients time, effort, and resources, ensuring tailor-made solutions that meet specific needs.",
    },
  ];
  return (
    <div className="w-full mt-7">
      <h2 className="text-center font-extrabold text-2xl text-purple">
        OUR INFO
      </h2>
      <div className="bg-purple w-10 h-1 mx-auto" />

      <div className="grid grid-cols-4"></div>
    </div>
  );
};

export default OurInfo;
