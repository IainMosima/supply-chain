import Image, { StaticImageData } from "next/image";
import { Images } from "../../constants"

interface ImageInfoProps {
  name: string,
  caption: string,
  image: StaticImageData,
}

const imageContainer = ({ name, caption, image }: ImageInfoProps) => {
  return (
    <div>
       <Image
          src={image}
          className="object-fill w-full h-[25rem] sm:h-screen"
          alt={name}
          key={name}
         />
        
    </div>
  )
}

export default imageContainer