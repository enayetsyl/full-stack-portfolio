import Image from "next/image";
import Link from "next/link";


const WorkCard = ({ workData }) => {
  const { src, alt, link, title, desc } = workData;
  return (
    <Link
      href={link}
      target="_blank"
      className="overflow-hidden text-start group"
    >
      <Image
      height={350}
      width={400}
        src={src}
        alt={alt}
        className="w-full max-h-[350px] object-cover rounded-2xl duration-500 hover:scale-95"
      />
      <h2 className="text-xl group-hover:text-[#36d7b7] duration-300 pt-4 pl-2">
        {title}
      </h2>
      <p className="uppercase text-sm pl-2 opacity-50">{desc}</p>
    </Link>
  );
};

export default WorkCard;