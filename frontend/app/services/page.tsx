import { Loading, OurServices } from '@/components'
import { getAllServices } from '@/network/Services';
import React from 'react';

export const metadata = {
  title: 'Our Services',
  description: 'A list of all our services',
}

const Services = async () => {
  const services = await getAllServices();
  return (
    <OurServices services={services}/>
  )
}

export default Services;