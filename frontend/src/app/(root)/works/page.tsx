'use client';
import { useEffect, useState } from 'react';
import { portfolioWorks } from '../../../../public/datas/data';
import WorkCard from '@/components/WorkCard';
import Categories from '@/components/Categories';

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [originalProjects, setOriginalProjects] = useState([]); // Store original fetched projects

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}project/get-all-projects`
      );
      const data = await response.json();
      setProjects(data.data || []);
      setOriginalProjects(data.data || []); // Store original data
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filterItems = (category) => {
    if (category === 'all') {
      setProjects(originalProjects); // Reset to original fetched data
      return;
    }
    const newItems = originalProjects.filter((item) =>
      item.category.includes(category)
    );
    setProjects(newItems);
  };

  return (
    <div className="xl:pl-[270px]">
      <div className="container px-4 mx-auto py-20">
        <h2 className="text-3xl font-medium">My Works</h2>
        {/* filtering */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Categories filterItems={filterItems} />
        </div>
        {/* works */}
        <div className="grid grid-cols-3 gap-4 gap-y-8 lg:gap-y-12 lg:gap-20 py-12">
          {projects?.map((item, i) => {
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
