import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type WorkData = {
  image: StaticImageData | string;
  liveLink: string;
  gitHubLink?: string;
  docLink?: string;
  videoLink?: string;
  title: string;
  description?: string;
  stack?: string[];
  technologies?: string[];
};

type WorkCardProps = {
  workData: WorkData;
};

const FeaturedCard = ({ workData }: WorkCardProps) => {
  const {
    image,
    liveLink,
    gitHubLink,
    docLink,
    videoLink,
    title,
    description,
    stack,
    technologies,
  } = workData;

  return (
    <div className="text-start group">
      <Link href={liveLink} target="_blank">
        <div className="h-[300px] md:h-[150px] lg:h-[250px]">
          <Image
            height={300}
            width={400}
            src={image}
            alt="portfolio image"
            className="w-full max-h-full h-full object-cover rounded-2xl duration-500 hover:scale-95"
          />
        </div>

        <h2 className="text-xl group-hover:text-[#36d7b7] duration-300 pt-4 pl-2">
          {title}
        </h2>

        {description && (
          <div className="relative flex items-center gap-2 pl-2">
            <p className="capitalize text-sm opacity-50">
              {description.slice(0, 60)}...
            </p>
          </div>
        )}
      </Link>

      {/* Stacks */}
      {stack && stack.length > 0 && (
        <div className="my-2 ml-2">
          <h6 className="text-sm opacity-75 flex gap-4">
            Stacks:
            <div className="flex gap-1 flex-wrap text-[13px]">
              {stack.map((st, i) => (
                <span key={i} className="bg-orange-600/40 px-2 py-0.5 rounded">
                  {st}
                </span>
              ))}
            </div>
          </h6>
        </div>
      )}

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="my-2 ml-2">
          <h6 className="text-sm opacity-75 flex gap-4">
            Techs:
            <div className="flex gap-1 flex-wrap text-[13px]">
              {technologies.map((tech, i) => (
                <span key={i} className="bg-green-600/30 px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </h6>
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-y-4 gap-x-6 ml-2 mt-2 text-lg">
        {liveLink && (
          <Link
            href={liveLink}
            className="opacity-75 hover:opacity-100 underline"
            target="_blank"
          >
            Live Link
          </Link>
        )}
        {gitHubLink && (
          <Link
            href={gitHubLink}
            className="opacity-75 hover:opacity-100 underline"
            target="_blank"
          >
            Code
          </Link>
        )}
        {docLink && (
          <Link
            href={docLink}
            className="opacity-75 hover:opacity-100 underline"
            target="_blank"
          >
            Doc
          </Link>
        )}
        {videoLink && (
          <Link
            href={videoLink}
            className="opacity-75 hover:opacity-100 underline"
            target="_blank"
          >
            Watch
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeaturedCard;
