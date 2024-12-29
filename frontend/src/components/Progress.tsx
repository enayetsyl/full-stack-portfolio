import { HashLoader } from 'react-spinners';

const Progress = () => {
  return (
    <div className="xl:pl-[270px]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center items-center text-center min-h-[90vh] max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl md:leading-snug mb-12">
            Something new is cooking! Please visit in some days. Thank You for
            your patience.
          </h2>

          <HashLoader color="#36d7b7" size={100} />
        </div>
      </div>
      <div className="relative border-b custom_border w-full"></div>
    </div>
  );
};

export default Progress;