import React from 'react'

const Form = () => {
  return (
    <form className='border-2 p-5 rounded-lg border-gray-200'>
      <label>Full Names</label>
      <br/>
      <input type='text' placeholder='Enter your Full Name' className='text-[1rem] p-2 border-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]'/>
      <br/>
      <br/>
      <label>Email</label>
      <br/>
      <input type='text' placeholder='Enter your Email' className='text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]'/>
      <br/>
      <br/>
      <label>Organisation</label>
      <br/>
      <input type='text' placeholder='Enter your Organisation' className='text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]'/> 
      <br/>
      <br/>
      <label>Phone Number</label>
      <br/>
      <input type='text' placeholder='Enter your Phone Number' className='text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]'/>
      <br/>
      <br/>
      <label>Message</label>
      <br/>
      <input type='text' placeholder='Enter your Message...' className='text-[1rem] border-2 p-2 rounded-md border-gray-200 w-[20rem] sm:w-[27rem]'/>

      <br/>
      <br/>
      <button className='bg-purple w-[9rem] h-[2.5rem] rounded-md font-bold text-white'>Send Message</button>
    </form>
  )
}

export default Form