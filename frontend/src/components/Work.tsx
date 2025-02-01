'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import WorkCard from './WorkCard';

const Work = () => {
  const [projects, setProjects] = useState([]);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}project/get-all-projects`
      );
      const data = await response.json();
      setProjects(data.data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const buttonData = {
    link: '/works',
    text: 'View All Work',
  };

  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium">Featured Work</h2>
      <div className="grid grid-cols-3 gap-4 gap-y-12 lg:gap-20 py-12">
        {projects?.slice(0, 3).map((item, i) => {
          return (
            <div className="col-span-3 md:col-span-1" key={i}>
              <WorkCard workData={item} />
            </div>
          );
        })}
      </div>
      <Button data={buttonData} />
    </div>
  );
};

export default Work;
