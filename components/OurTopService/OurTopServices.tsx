import Image from 'next/image';
import "./OurTopService.scss";
import { Images } from '@/constants';

const OurTopService = () => {
  return (
    <div>
      <div className='flex w-full bg-purple text-white place-items-center justify-between p-3'>
          <h2 className='font-semibold text-xl'>Our Top Services</h2>

          <div className='flex place-items-center gap-2'>
            <h3 className='font-bold cursor-pointer'>See All</h3>
            <Image src={Images.nextWhite} alt='next-icon' width={10}/>
          </div>
      </div>

    </div>
  )
}

export default OurTopService