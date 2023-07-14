import { HompageCarousel, OurInfo, OurTopService } from '@/components'
import { Carousel } from '@/models/Carousel';
import { Services } from '@/models/Services'
import { getCarouselImages } from '@/network/Carousel';
import { getRandomServices } from '@/network/Services'
import Image from 'next/image'

export default async function Home() {
  const servicesData = fetchRandomServices();
  const imagesInfoData = fetchCarouselImages();

  const [services, imagesInfo] = await Promise.all([servicesData, imagesInfoData])

  return (
    <div>
      <OurTopService services={services}/>
      <HompageCarousel imagesInfo={imagesInfo}/>
      <OurInfo/>
    </div>
  )
}

async function fetchRandomServices():Promise<Services[] | []> {
  const randomServices = await getRandomServices();
  return randomServices;
}

async function fetchCarouselImages():Promise<Carousel[] | []> {
  const images = await getCarouselImages()
  return images;
}
