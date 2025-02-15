import Experience from '@/components/Experience';
import HomeContent from '@/components/HomeContent';
import CP from '@/components/CP';
import Tooling from '@/components/Tooling';
import Work from '@/components/Work';

const Home = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row">
        <div className="xl:pl-[270px] md:mt-20 xl:mt-0 w-full">
          <HomeContent />
          {/* <div className="relative border-b custom_border w-full" /> */}
          {/* <ClientLogos /> */}
          <div className="relative border-b custom_border w-full" />
          <Tooling />
          <div className="relative border-b custom_border w-full" />
          <Work />
          {/* <div className="relative border-b custom_border w-full" />
          <Testimonial /> */}
          <div className="relative border-b custom_border w-full" />
          <Experience />
          <div className="relative border-b custom_border w-full" />
          <CP />
          <div className="relative border-b custom_border w-full" />
        </div>
      </div>
    </>
  );
};

export default Home;
