import ClientLogos from '@/components/ClientLogos';
import Experience from '@/components/Experience';
import HomeContent from '@/components/HomeContent';
import Testimonial from '@/components/Testmonial';
import Tooling from '@/components/Tooling';
import Work from '@/components/Work';

const Home = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row">
        <div className="xl:pl-[270px] md:mt-20 xl:mt-0 w-full">
          <HomeContent />
          <div className="relative border-b custom_border w-full"></div>
          <ClientLogos />
          <div className="relative border-b custom_border w-full"></div>
          <Tooling />
          <div className="relative border-b custom_border w-full"></div>
          <Work />
          <div className="relative border-b custom_border w-full"></div>
          <Testimonial />
          <div className="relative border-b custom_border w-full"></div>
          <Experience />
          <div className="relative border-b custom_border w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
