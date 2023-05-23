import { Images } from "../../constants";
import Image from "next/image";
import "./OurInfo.scss";


const OurInfo = () => {
  const infos = [
    {
      icon: Images.mission,
      title: "Our Mission",
      info: "To work hand in hand with our clients to understand their supply chain needs for the best in class tailor made solutions",
    },
    {
      icon: Images.vision,
      title: "Our Vision",
      info: "To be the most reliable supply chain Solutions partner"
    },
    {
      icon: Images.coreValue,
      title: "Core Values",
      info: "To be the most reliable supply chain Solutions partner"
    }
  ];
  return (
    <div className="w-full mb-[7rem]">

      <div className="flex sm:flex-row flex-col place-items-center justify-evenly">
        {infos.map(info => (
          <div key={info.title} className="relative border-2 border-gray-700 w-[20rem] h-[20rem] p-5 ease-in-out duration-150 custom-shadow">


            <div className="h-full flex place-items-center justify-center flex-col gap-5">
              <div className="flex place-items-center justify-center">
                <Image src={info.icon} alt={info.title} />
                <h2 className="text-purple uppercase font-bold text-lg text-center">{info.title}</h2>
              </div>
              <p className="text-md text-center">{info.info}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurInfo;
