import Image from 'next/image';
import { Images } from '../../constants';
import './ContactUs.scss';
import Form from './form';


const ContactUs = () => {
  return (
    <div className='lg:mt-[9rem] md:mt-[9rem] mt-[7.6rem] mb-[2rem] flex flex-col'>
      <h2 className='font-semibold text-xl text-center text-purple'>Contact Us</h2>
      <div className='w-[1.5rem] h-[.2rem] bg-purple mx-auto'/>

      <div className='flex lg:gap-1 justify-center place-items-center lg:flex-row md:flex-col flex-col mt-5'>
        <div className='flex flex-col lg:gap-[2rem] gap-2 mb-2 lg:mb-0'>
          <div className='lg:w-[20rem] md:w-[30rem]'>
            <h3 className='font-extrabold text-center sm:text-left sm:text-4xl text-xl'>{`We'd`} like to hear <span className='text-purple'>from you</span></h3>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex place-items-center gap-1'>
              <Image src={Images.mail} height={30} alt='mailbox' />
              <p>supplychainsolutionshub@gmail.com</p>
            </div>

            <div className='flex place-items-center gap-1'>
              <Image src={Images.phone2} height={30} alt='mailbox' />
              <p>(+254)716 137 693</p>
            </div>
          </div>

        </div>

       <div>

       <Form/>
        
       </div>
      </div>
    </div>
  )
}

export default ContactUs