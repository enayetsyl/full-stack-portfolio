// /* eslint-disable react/prop-types */
// // import carRental from '/assets/car-rental-cropped.png';
// import easyFrontend from '/assets/ezy-croped.png';
// import quantumLearn from '/assets/quantum-learning.png';
// import srGypApp from '/assets/sr-gym-app.png';
// import gulfAuction from '/assets/gulf-auction.png';
// import snapJobs from '/assets/snapjobs.png';
// import Image from 'next/image';
// import Link from 'next/link';

// // declared all the tailwind classes so that the load on initiallization and can be used dynamically
// let colours =
//   'bg-slate-500 bg-slate-600 bg-gray-500 bg-gray-600 bg-zinc-500 bg-zinc-600 bg-neutral-500 bg-neutral-600 bg-stone-500 bg-stone-600 bg-red-500 bg-red-600 bg-orange-500 bg-orange-600 bg-amber-500 bg-amber-600 bg-lime-500 bg-lime-600 bg-green-500 bg-green-600 bg-emerald-500 bg-emerald-600 bg-teal-500 bg-teal-600 bg-cyan-500 bg-cyan-600 bg-sky-500 bg-sky-600 bg-blue-500 bg-blue-600 bg-indigo-500 bg-indigo-600 bg-violet-500 bg-violet-600 bg-purple-500 bg-purple-600 bg-fuchsia-500 bg-fuchsia-600 bg-pink-500 bg-pink-600 bg-rose-500 bg-rose-600';

// const codePreviewProjects = [
//   {
//     color: 'emerald',
//     img: easyFrontend,
//     title: 'Easy Frontend(A template selling website)',
//     desc: 'This is a template selling website. One can choose different type of sections from here for his desired site. You can also create the site, edit it in here. There are 600+ section made both in react and html. You can also choose bootstrap or tailwind as the css library.',
//     tags: ['React JS', 'Tailwind CSS', 'Bootstrap', 'Figma', 'HTML'],
//     liveLink: 'https://easyfrontend.com/',
//     codeLink: 'https://easyfrontend.com/components/ui',
//   },
//   {
//     color: 'orange',
//     img: gulfAuction,
//     title: 'Car Auction Website',
//     desc: 'A client project build with Next JS. It is a car auction website. For styling I used Tailwind CSS framework in this project.',
//     tags: ['React JS', 'Next JS', 'Tailwind CSS', 'Figma'],
//     liveLink: 'https://www.gulfauctions.online/',
//     codeLink: 'https://github.com/11Shafayet/gulf-next',
//   },
//   {
//     color: 'sky',
//     img: snapJobs,
//     title: 'Job Finding App',
//     desc: 'A Job finding Website build With React JS. For styling I used Chakra UI framework in this project.',
//     tags: ['React JS', 'Chakra UI', 'Figma'],
//     liveLink: 'https://snapjobs.netlify.app/',
//     codeLink: 'https://github.com/11Shafayet/snapjobs',
//   },
//   {
//     color: 'pink',
//     img: quantumLearn,
//     title: 'LMS Website',
//     desc: 'A simple but minimal LMS website build with React JS. For styling I used Tailwind CSS in this project. The website is fully responsive.',
//     tags: ['React JS', 'Tailwind CSS', 'Figma'],
//     liveLink: 'https://quantum-learn.netlify.app/',
//     codeLink: 'https://github.com/11Shafayet/lms',
//   },
//   {
//     color: 'cyan',
//     img: carRental,
//     title: 'Car Rental Website',
//     desc: 'This is a car rental website build with React JS and Tailwind CSS library. I also used React Toastify, Email JS, Swiper JS, Flowbite React and so on. Here I implemented Search Filtering, Data fetching and many more. The website is fully responsive.',
//     tags: ['React JS', 'Tailwind CSS', 'Figma'],
//     liveLink: 'https://rent-a-ride-usa.netlify.app/',
//     codeLink: 'https://github.com/11Shafayet/car-rental-one',
//   },
//   {
//     color: 'violet',
//     img: srGypApp,
//     title: 'GYM App',
//     desc: 'Single page based Gym App. Build with Material UI and React JS. Used Rapid Api to collect data and show them on UI.',
//     tags: ['React JS', 'Material UI', 'Figma', 'Rapid Api'],
//     liveLink: 'https://sr-gym-app.netlify.app/',
//     codeLink: 'https://github.com/11Shafayet/gym-app',
//   },
// ];

// const SingleProject = ({ item }) => {
//   const { color, img, title, desc, tags, liveLink, codeLink } = item;
//   return (
//     <div
//       className={`grid grid-cols-1 lg:grid-cols-12 bg-${color}-600 bg-opacity-20 rounded-xl p-6 md:p-12`}
//     >
//       <div className="lg:col-span-5">
//         <div
//           className={`bg-${color}-500 bg-opacity-20 flex justify-center items-center p-6 rounded-xl`}
//         >
//           <Link
//             href={liveLink}
//             className="overflow-hidden max-w-full max-h-[500px]"
//           >
//             <Image
//               src={img}
//               alt={title}
//               height={500}
//               width={500}
//               className="max-w-full max-h-[500px] h-auto hover:scale-110 duration-500"
//             />
//           </Link>
//         </div>
//       </div>
//       <div className="lg:col-span-7">
//         <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
//           <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">
//             {title}
//           </h5>
//           <p className="leading-loose opacity-80 mb-6 lg:pr-12">{desc}</p>
//           <div className="mb-6 flex flex-wrap gap-4">
//             {tags.map((tag, j) => (
//               <h5
//                 className={`py-1 px-4 rounded-full bg-${color}-600 bg-opacity-30`}
//                 key={j}
//               >
//                 {tag}
//               </h5>
//             ))}
//           </div>
//           <div className="flex gap-x-4">
//             <Link
//               href={liveLink}
//               className={`font-bold bg-${color}-600 text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded inline-flex`}
//             >
//               Preview
//             </Link>
//             {codeLink && (
//               <Link
//                 href={codeLink}
//                 className={`font-bold border-2 border-white hover:border-${color}-600 hover:bg-${color}-600 text-white hover:text-white px-8 py-3 hover:bg-opacity-90 duration-300 rounded inline-flex`}
//               >
//                 View Code
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CodePreview = () => {
//   return (
//     <div className="xl:pl-[270px]">
//       <div className="container px-4 mx-auto">
//         <div className="py-12">
//           <div className="flex flex-col gap-y-12">
//             {codePreviewProjects.map((item, i) => (
//               <SingleProject item={item} key={i} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodePreview;

import React from 'react'

const page = () => {
  return (
    <div>
      Code Preview
    </div>
  )
}

export default page
