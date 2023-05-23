import Image from 'next/image';
import { Images } from '../../constants';
import './ContactUs.scss';
import Form from './form';


const ContactUs = () => {
  return (
    <div className='sm:mt-[8rem] mt-[7rem] mb-[2rem] flex flex-col'>
      <h2 className='font-semibold text-xl text-center text-purple'>Contact Us</h2>
      <div className='w-[1.5rem] h-[.2rem] bg-purple mx-auto'/>

      <div className='flex justify-center place-items-center sm:flex-row flex-col mt-7'>
        <div className='flex flex-col gap-[5rem]'>
          <div className='w-[20rem]'>
            <h3 className='font-extrabold text-center sm:text-left sm:text-4xl text-xl'>{`We'd`} like to hear <span className='text-purple'>from you</span></h3>
          </div>

          <div>
            <div className='flex place-items-center'>
              <Image src={Images.mail} alt='mailbox' />
              <p>supplychainsolutionshub@gmail.com</p>
            </div>

            <div className='flex place-items-center'>
              <Image src={Images.phone2} alt='mailbox' />
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