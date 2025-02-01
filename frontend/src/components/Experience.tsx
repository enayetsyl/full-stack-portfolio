'use client';

import React from 'react';
import { experience } from '../../public/datas/data';

const colors = [
  'bg-yellow-600',
  'bg-blue-600',
  'bg-emerald-600',
  'bg-orange-600',
];

const Experience = () => {
  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium mb-8 text-center">My Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
        {experience.map((item, i) => {
          const { title, designation, duration, details } = item;
          const bgColor = colors[i % colors.length];

          return (
            <div className="text-left h-full" key={i}>
              <div
                className={`w-full flex flex-col items-start gap-2 border custom_border rounded-xl p-6 md:p-8 h-full group text-white ${bgColor} bg-opacity-10`}
              >
                <h2 className="text-2xl font-bold capitalize">{designation}</h2>
                <p className="capitalize opacity-75 text-lg">{title}</p>
                <p className="opacity-75 text-sm mb-4">{duration}</p>

                {/* Rendering HTML safely */}
                <div
                  className="text-sm opacity-80 space-y-3"
                  dangerouslySetInnerHTML={{ __html: details }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
