import { HompageCarousel, OurInfo, OurTopService } from '@/components';
import { Carousel } from '@/models/Carousel';
import { Services } from '@/models/Services'
import { getCarouselImages } from '@/network/Carousel';
import { getRandomServices } from '@/network/Services'
import { getCarouselImages } from '@/network/Carousel';
import { getRandomServices } from '@/network/Services';

export default function Home() {
  return (
    <div>
      <OurTopService/>
      <HompageCarousel/>
      <OurInfo/>
    </div>
  )
}