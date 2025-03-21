'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import FeaturedCard from './FeaturedCard';
import { staticWorks } from '../../public/datas/data';

const Work = () => {
  const buttonData = {
    link: '/works',
    text: 'View All Work',
  };

  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium">Full Stack Works</h2>
      <div className="grid grid-cols-3 gap-4 gap-y-12 lg:gap-20 py-12">
        {staticWorks.map((item, i) => {
          return (
            <div className="col-span-3 md:col-span-1" key={i}>
              <FeaturedCard workData={item} />
            </div>
          );
        })}
      </div>
      <Button data={buttonData} />
    </div>
  );
};

export default Work;
