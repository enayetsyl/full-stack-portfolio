'use client';

import { useEffect, useState } from 'react';
import SingleBlogItem from '@/components/SingleBlogItem';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/v1/blog/get-all-blog'
        );
        const data = await response.json();

        setBlogs(data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="xl:pl-[270px]">
      <div className="container px-4 mx-auto max-w-4xl py-12">
        {blogs.length === 0 ? (
          <h4 className="text-xl text-center">There are nothing to show.</h4>
        ) : (
          <div className="grid grid-cols-1 gap-y-6 md:gap-y-12">
            {blogs.map((item, i) => (
              <SingleBlogItem key={i} item={item} />
            ))}{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
