import React from 'react';

import ImageCommon from './ImageCommon';

const StarRatings = ({ count }) => {
  return (
    <div className="flex gap-1">
      {count >= 1 ? <ImageCommon src={'/assets/icon/icon_12.svg'} className='w-4 h-4' /> : <ImageCommon src={'/assets/icon/icon_11.svg'} className='w-4 h-4' />}
      {count >= 2 ? <ImageCommon src={'/assets/icon/icon_12.svg'} className='w-4 h-4' /> : <ImageCommon src={'/assets/icon/icon_11.svg'} className='w-4 h-4' />}
      {count >= 3 ? <ImageCommon src={'/assets/icon/icon_12.svg'} className='w-4 h-4' /> : <ImageCommon src={'/assets/icon/icon_11.svg'} className='w-4 h-4' />}
      {count >= 4 ? <ImageCommon src={'/assets/icon/icon_12.svg'} className='w-4 h-4' /> : <ImageCommon src={'/assets/icon/icon_11.svg'} className='w-4 h-4' />}
      {count >= 5 ? <ImageCommon src={'/assets/icon/icon_12.svg'} className='w-4 h-4' /> : <ImageCommon src={'/assets/icon/icon_11.svg'} className='w-4 h-4' />}
    </div>
  );
};

export default StarRatings;
