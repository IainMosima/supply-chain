import Image from 'next/image';
import { Images } from '../../constants';


const Services = () => {
  const services = [
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Spend analysis and category management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Procurement processes and policies review and re-engineering',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
  ]
  return (
    <div className='sm:mt-[8rem] mt-[7rem] mb-[2rem] flex flex-col'>
        <h2 className='font-semibold text-xl text-center text-purple'>All Our Services</h2>
        <div className='w-[1.5rem] h-[.2rem] bg-purple mx-auto'/>

        <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 sm:gap-5 gap-1 mt-[2rem]'>
          {services.map((service, index) => 
            <div key={index} className='border-2 h-[30rem] rounded-[10px] w-full border-gray-400 p-1 sm:p-5 flex flex-col sm:gap-2 place-items-start'>
              <div className='flex place-items-center basis-[6rem]'>
                <h3 className='text-[.7rem] sm:text-[1.2rem] text-purple font-bold'>{service.serviceName}</h3>
              </div>
              <div className='w-full sm:h-[17rem] h-[16.5rem]'>
                <Image src={service.serviceImg} className='w-full h-full rounded-[10px] object-cover' alt={service.serviceName}/>
              </div>
              <div>
                <p className='text-sm'>{service.description}</p>
              </div>
            </div>
          )
            
          }
        </div>
    </div>
  )
}

export default Services