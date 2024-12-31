import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type WorkData = {
  src: StaticImageData | string;
  alt: string;
  link: string;
  title: string;
  desc: string;
};

type WorkCardProps = {
  workData: WorkData;
};

const WorkCard = ({ workData }: WorkCardProps) => {
  console.log(workData);

  const { image, liveLink, title, description } = workData;
  return (
    <Link
      href={liveLink}
      target="_blank"
      className="overflow-hidden text-start group"
    >
      <Image
        height={350}
        width={400}
        src={image}
        alt="portfolio image"
        className="w-full max-h-[350px] object-cover rounded-2xl duration-500 hover:scale-95"
      />
      <h2 className="text-xl group-hover:text-[#36d7b7] duration-300 pt-4 pl-2">
        {title}
      </h2>
      <p className="uppercase text-sm pl-2 opacity-50">{description}</p>
    </Link>
  );
};

export default WorkCard;
