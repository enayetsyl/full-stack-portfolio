/* eslint-disable react/prop-types */
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';

interface BlogItem {
  image: string;
  title: string;
  desc?: string;
  createdAt?: string;
  link: string;
}

interface SingleBlogItemProps {
  item: BlogItem;
}

const formatDate = (dateString?: string) => {
  if (!dateString) return 'Unknown Date';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const SingleBlogItem: React.FC<SingleBlogItemProps> = ({ item }) => {
  const { image, title, desc, createdAt, link } = item;

  return (
    <Link
      href={link}
      className="px-4 lg:px-12 pb-6 md:pb-16 relative overflow-hidden z-10"
      target='_blank'
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="w-full h-[300px] object-cover"
      />

      <div className="bg-slate-700 shadow-xl max-w-[90%] mx-auto -mt-20 py-12 px-8 relative">
        <h2 className="capitalize text-2xl font-bold hover:text-primary duration-500 my-4 line-clamp-1">
          {title}
        </h2>
        <p className="opacity-75 line-clamp-2">{desc}</p>
        <div className="flex gap-x-5 mt-4">
          <h5 className="text-sm flex items-center gap-x-2">
            <FaCalendarAlt /> {formatDate(createdAt)}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default SingleBlogItem;
