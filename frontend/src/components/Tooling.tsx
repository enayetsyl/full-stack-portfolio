'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Skill {
  _id: string; // Use the correct type (string, number, etc.)
  name: string;
  image: string; // URL for the skill image
}


const Tooling = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  console.log("skills", skills)
  const fetchSkills = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}skill`);
      if (response.ok) {
        const data = await response.json();
        console.log('data', data);
        setSkills(data.data);
      } else {
        console.error('Failed to fetch skills');
      }
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  console.log('skills', skills);
  useEffect(() => {
    fetchSkills();
  }, []);
  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium">My Expertise</h2>
      <div className="grid grid-cols-4 gap-4 xl:gap-12 py-12">
        {skills.map((item) => {
          return (
            <div
              className="col-span-4 sm:col-span-2 lg:col-span-1 text-center h-full"
              key={item._id}
            >
              <div className="w-full flex items-center gap-2 border custom_border rounded-xl p-4 md:p-8 h-full group">
                <Image
                  src={item.image}
                  alt="expertise"
                  width={80}
                  height={80}
                  className="mr-2.5 w-12 h-12 grayscale group-hover:grayscale-0 duration-300"
                />

                <h2 className="text-xl capitalize">{item.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tooling;
