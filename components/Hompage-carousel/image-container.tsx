import Image, { StaticImageData } from "next/image";
import { Images } from "../../constants";
import CaptionTrimmer from "../CaptionTrimmer/CaptionTrimmer";

interface ImageInfoProps {
  name: string,
  caption: string,
  image: StaticImageData,
}

const imageContainer = ({ name, caption, image }: ImageInfoProps) => {
  return (
    <div className="relative w-full">
        <Image
            src={image}
            className="object-fill w-full h-[60vh] z-0"
            alt={name}
            key={name}
          />

        {/* <div className="absolute bottom-[5rem] sm:bottom-[15rem] sm:ml-[7rem]  place-items-center sm:w-[40rem]">
          <CaptionTrimmer text={caption} maxLength={137}/>
        </div> */}
        
    </div>
  )
}

export default imageContainer