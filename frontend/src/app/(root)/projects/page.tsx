'use client';
import { useState } from 'react';
import { portfolioWorks } from '../../../../public/datas/data';
import WorkCard from '@/components/WorkCard';

const Works = () => {
  const [menuItems, setMenuItems] = useState(portfolioWorks);

  return (
    <div className="xl:pl-[270px]">
      <div className="container px-4 mx-auto py-20">
        <h2 className="text-3xl font-medium">My Works</h2>

        {/* works */}
        <div className="grid grid-cols-3 gap-4 gap-y-8 lg:gap-y-12 lg:gap-20 py-12">
          {menuItems.map((item, i) => {
            return (
              <div className="col-span-3 md:col-span-1" key={i}>
                <WorkCard workData={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
