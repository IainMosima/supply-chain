"use client";

import React, { useState } from 'react';

interface CaptionTrimmerProps {
  text: string;
  maxLength: number;
}

const CaptionTrimmer: React.FC<CaptionTrimmerProps> = ({ text, maxLength }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const caption = showMore ? text : `${text.slice(0, maxLength)}...`;

  return (
    <div className='ml-3'>
      <p className="text-[15px] sm:font-base font-semibold text-black sm:text-lg">{caption}</p>
      {text.length > maxLength && (
        <div className='flex justify-end place-items-start'>
          <button className='text-sm bg-purple rounded-[8px] mr-6 text-white p-2' onClick={toggleShowMore}>{showMore ? 'Read Less' : 'Read More'}</button>
        </div>
      )}
    </div>
  );
};

export default CaptionTrimmer;