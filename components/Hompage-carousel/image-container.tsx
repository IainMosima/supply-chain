import Image, { StaticImageData } from "next/image";
import { Images } from "../../constants";
import CaptionTrimmer from "../CaptionTrimmer/CaptionTrimmer";

interface ImageInfoProps {
  name: string;
  caption: string;
  image: StaticImageData;
}

const imageContainer = ({ name, caption, image }: ImageInfoProps) => {
  return <Image src={image} alt={name} key={name} className="width-[30px] height-[15px]"/>;
};

export default imageContainer;
