import Experience from '@/components/Experience';
import HomeContent from '@/components/HomeContent';
import Services from '@/components/Services';
import Tooling from '@/components/Tooling';
import Work from '@/components/Work';
import FeaturedWork from '@/components/FeaturedWork';

const Home = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row">
        <div className="xl:pl-[270px] md:mt-20 xl:mt-0 w-full">
          <HomeContent />
          {/* <div className="relative border-b custom_border w-full" /> */}
          {/* <ClientLogos /> */}
          <div className="relative border-b custom_border w-full" />
          <Services />
          <div className="relative border-b custom_border w-full" />
          <Tooling />
          <div className="relative border-b custom_border w-full" />
          <Work />
          <div className="relative border-b custom_border w-full" />
          <FeaturedWork />
          <div className="relative border-b custom_border w-full" />
          <Experience />
        </div>
      </div>
    </>
  );
};

export default Home;
