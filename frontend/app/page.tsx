import { HompageCarousel, OurInfo, OurTopService } from '@/components';
import { getRandomServices } from '@/network/Services';

export default async function Home() {
  const servicesData = getRandomServices();
  const [services] = await Promise.all([servicesData]);
  return (
    <div>
      <OurTopService services={services}/>
      <HompageCarousel/>
      <OurInfo/>
    </div>
  )
}
