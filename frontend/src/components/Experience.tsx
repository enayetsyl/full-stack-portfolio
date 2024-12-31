'use client';

import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [exp, setExp] = useState([]);

  const fetchExp = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}experience/get-all-experience`
      );
      if (response.ok) {
        const data = await response.json();
        console.log('data', data);
        setExp(data.data);
      } else {
        console.error('Failed to fetch Experience');
      }
    } catch (error) {
      console.error('Error fetching experience:', error);
    }
  };

  console.log('experience', Experience);
  useEffect(() => {
    fetchExp();
  }, []);
  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium">My Experiences</h2>
      <div className="grid grid-cols-4 gap-4 xl:gap-12 py-12">
        {exp.map((item) => {
          return (
            <div
              className="col-span-4 sm:col-span-2 lg:col-span-1 text-center h-full"
              key={item._id}
            >
              <div className="w-full flex items-center gap-2 border custom_border rounded-xl p-4 md:p-8 h-full group">
                <h2 className="text-xl capitalize">{item.companyName}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
