'use client';

import { useEffect, useState } from 'react';
import SingleBlogItem from '@/components/SingleBlogItem';
import Link from 'next/link';

const HomeBlog = () => {
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
    <div>
      <div className="container px-4 mx-auto py-12">
        {blogs.length === 0 ? (
          <h4 className="text-xl text-center">There are nothing to show.</h4>
        ) : (
          <>
            <h2 className="text-3xl font-medium mb-8 text-center">My Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.slice(0, 3).map((item, i) => (
                <SingleBlogItem key={i} item={item} />
              ))}
            </div>
            <div>
              <Link
                href={`/blog`}
                className="flex justify-center items-center w-full border border-white border-opacity-10 hover:border-opacity-[0.02] hover:bg-white hover:bg-opacity-[0.02] duration-300 p-3.5 rounded-lg text-center mt-4"
              >
                See More
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeBlog;
