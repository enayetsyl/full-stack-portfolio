'use client';

import Link from 'next/link';
import React from 'react';

const cp = [
  {
    site: 'Leetcode',
    solved: 2,
    link: 'https://leetcode.com/u/XTl7hvNPIc/',
  },
  {
    site: 'Codeforces',
    solved: 30,
    link: 'https://codeforces.com/profile/enayetsyl',
  },
  {
    site: 'Hacker Rank',
    solved: 79,
    link: 'https://www.hackerrank.com/profile/enayetflweb',
  },
];

const CP = () => {
  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium mb-8 text-center">
        Competitve Programming
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 xl:gap-12">
        {cp.map((item, i) => {
          const { site, solved, link } = item;

          return (
            <div className="text-left h-full" key={i}>
              <div className="w-full flex flex-col items-start gap-2 border custom_border rounded-xl p-6 md:p-8 h-full group text-white">
                <h2 className="text-2xl font-bold capitalize">{site}</h2>
                <p className=" capitalize">
                  Problem Solved:{' '}
                  <span className="font-bold text-lg text-green-400">
                    {solved}
                  </span>
                </p>

                <Link
                  href={link}
                  className="opacity-75 underline hover:opacity-100"
                  target='_blank'
                >
                  View My Profile
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CP;
