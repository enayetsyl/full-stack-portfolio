import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type WorkData = {
  image: StaticImageData | string;
  liveLink: string;
  codeLink: string;
  docLink: string;
  title: string;
  description?: string;
};

type WorkCardProps = {
  workData: WorkData;
};

const WorkCard = ({ workData }: WorkCardProps) => {
  const { image, liveLink, codeLink, docLink, title, description } = workData;

  return (
    <>
      <Link
        href={liveLink}
        target="_blank"
        className="overflow-hidden text-start group"
      >
        <div className="h-[300px] md:h-[150px] lg:h-[250px]">
          <Image
            height={300}
            width={400}
            src={image}
            alt="portfolio image"
            className="w-full max-h-full object-cover rounded-2xl duration-500 hover:scale-95"
          />
        </div>

        <h2 className="text-xl group-hover:text-[#36d7b7] duration-300 pt-4 pl-2">
          {title}
        </h2>
        <p className="capitalize text-sm pl-2 opacity-50 line-clamp-2">
          {description}
        </p>
      </Link>
      <div className="flex flex-wrap gap-y-4 gap-x-6 ml-2 mt-2 text-lg">
        <Link
          href={liveLink}
          className="opacity-75 hover:opacity-100 underline"
        >
          Live Link
        </Link>
        <Link
          href={codeLink}
          className="opacity-75 hover:opacity-100 underline"
        >
          Code
        </Link>
        <Link href={docLink} className="opacity-75 hover:opacity-100 underline">
          Doc
        </Link>
      </div>
    </>
  );
};

export default WorkCard;
