import { HompageCarousel, OurInfo, OurTopService } from '@/components';
import { getCarouselImages } from '@/network/Carousel';
import { getRandomServices } from '@/network/Services';

export default async function Home() {
  const servicesData = getRandomServices();
  const imagesInfoData = getCarouselImages();
  const [services, imagesInfo] = await Promise.all([servicesData, imagesInfoData]);
  return (
    <div>
      <OurTopService services={services}/>
      <HompageCarousel imagesInfo={imagesInfo}/>
      <OurInfo/>
    </div>
  )
}
