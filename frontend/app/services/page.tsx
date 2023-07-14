import { OurServices } from '@/components'
import { Services } from "@/models/Services";
import { getAllServices } from '@/network/Services';
import React from 'react'

const Services = async () => {
  const services = await fetchAllServices();
  return (
    <OurServices services={services}/>
  )
}

async function fetchAllServices(): Promise<Services[] | []> {
  const services = await getAllServices();
  return services;
}


export default Services;