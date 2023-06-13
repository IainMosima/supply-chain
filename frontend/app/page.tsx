import { HompageCarousel, OurInfo, OurTopService } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <OurTopService/>
      <HompageCarousel/>
      <OurInfo/>
    </div>
  )
}
