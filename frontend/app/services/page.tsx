import { Loading, OurServices } from '@/components'
import { getAllServices } from '@/network/Services';
import React from 'react';


const Services = async () => {
  const services = await getAllServices();
  return (
    <OurServices services={services}/>
  )
}

export default Services;