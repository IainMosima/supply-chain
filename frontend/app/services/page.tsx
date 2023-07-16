<<<<<<< HEAD
import { OurServices } from '@/components'
import { Services } from "@/models/Services";
import { getAllServices } from '@/network/Services';
import React from 'react'

const Services = async () => {
  const services = await fetchAllServices();
=======
import { Loading, OurServices } from '@/components'
import { getAllServices } from '@/network/Services';
import React from 'react';


const Services = async () => {
  const services = await getAllServices();
>>>>>>> testing
  return (
    <OurServices services={services}/>
  )
}

<<<<<<< HEAD
async function fetchAllServices(): Promise<Services[] | []> {
  const services = await getAllServices();
  return services;
}


=======
>>>>>>> testing
export default Services;