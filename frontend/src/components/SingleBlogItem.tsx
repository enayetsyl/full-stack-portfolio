/* eslint-disable react/prop-types */
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

interface BlogItem {
  img: {
    src: string;
  };
  title: string;
  desc: string;
  date: string;
}

interface SingleBlogItemProps {
  item: BlogItem;
}

const SingleBlogItem: React.FC<SingleBlogItemProps> = ({ item }) => {
  const { img, title, desc, date } = item;
  console.log(img);

  return (
    <div className="px-4 lg:px-12 pb-6 md:pb-16 relative overflow-hidden z-10">
      <Image
        src={img.src}
        alt={title}
        width={400}
        height={400}
        className="w-full h-[300px] object-cover"
      />

      <div className="bg-slate-700 shadow-xl max-w-[90%] mx-auto -mt-20 py-12 px-8 relative">
        <h2 className="capitalize text-2xl font-bold hover:text-primary duration-500 my-4">
          {title}
        </h2>
        <p className="opacity-75">{desc}</p>
        <div className="flex gap-x-5 mt-4">
          <h5 className="text-sm flex items-center gap-x-2">
            <FaCalendarAlt /> {date}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogItem;
