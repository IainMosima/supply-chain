import { Images } from "../../constants";
import Image from "next/image";
import "./OurInfo.scss";


const OurInfo = () => {
  const infos = [
    {
      icon: Images.aboutUs,
      title: "Who are we",
      info: "Supply Chain Solutions Hub provides custom solutions for all supply chain needs, with expert advisors for cost savings, efficiency, and foresight. Their one-stop-shop approach saves clients time, effort, and resources, ensuring tailor-made solutions that meet specific needs.",
    },
    {
      icon: Images.mission,
      title: "Our Mission",
      info: "To work hand in hand with our clients to understand their supply chain needs for the best in class tailor made solutions",
    },
    {
      icon: Images.vision,
      title: "Vision",
      info: "To be the most reliable supply chain Solutions partner"
    },
    {
      icon: Images.coreValue,
      title: "Core Values",
      info: "To be the most reliable supply chain Solutions partner"
    }
  ];
  return (
    <div className="w-full mt-7 h-2/3">
      <h2 className="text-center font-extrabold text-2xl text-purple">
        OUR INFO
      </h2>
      <div className="bg-purple w-10 h-1 mx-auto" />

      <div className="grid sm:grid-cols-4 grid-cols-1 mt-7 gap-2">
        {infos.map(info => (
          <div key={info.title} className="relative border-2 border-gray-700 rounded-3xl w-full h-[15rem] px-5 flex place-items-center">

            <div className="sm:bottom-[13.5rem] bottom-[13.4rem] absolute w-[20rem]">
              <div className="flex place-items-center justify-center bg-white w-[14rem] mx-auto">
                <Image src={info.icon} alt="about-us-icon" />
                <h2 className="text-purple uppercase font-bold text-lg">{info.title}</h2>
              </div>
            </div>

            <p className="text-sm text-center">{info.info}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurInfo;
