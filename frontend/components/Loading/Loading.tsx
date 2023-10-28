'use client';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className='flex justify-center place-items-center text-purple h-[70vh]'>
      <CircularProgress  color='inherit'/>
    </div>
  )
}

export default Loading;