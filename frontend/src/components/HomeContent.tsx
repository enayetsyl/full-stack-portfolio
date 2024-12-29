
import Resume from './Resume';
import Social from './Social';
import ownImage from '../../public/assets/Md_Enayetur_Rahman_Photo.png';
import Image from 'next/image';

const HomeContent = () => {
  return (
    <div className="relative z-10">
      <div className="max-w-3xl py-8 md:py-12 px-12">
        <Image
        height={200}
        width={200}
          src={ownImage}
          alt="Enayet"
          className="w-24 h-24 object-cover rounded-xl mb-6"
        />
        <h2 className="text-2xl sm:text-[40px] sm:leading-tight mb-2">
          Hey, I'm Enayet — I'm a Full Stack Developer!
        </h2>
        <p className="text-lg font-light opacity-75 mb-12">
          I am a full-stack Developer with 1 years of experience specializing in Next JS, Express, Mongodb, Postgres that drive innovation and efficiency.
        </p>
        <Social />
      </div>
      <Resume />
    </div>
  );
};

export default HomeContent;