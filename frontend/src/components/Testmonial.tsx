import Image from 'next/image';
import { reviews } from '../../public/datas/data';

const Testimonial = () => {
  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium">What People Say About Me</h2>
      <div className="grid grid-cols-2 gap-4 xl:gap-8 py-12">
        {reviews.map((review, i) => {
          const { text, userName, userImage, designation } = review;
          return (
            <div
              className="col-span-2 sm:col-span-1 custom_border p-6 sm:p-12 rounded-xl h-full"
              key={i}
            >
              <p className="text-lg font-light leading-7 xl:text-justify">{`"${text}"`}</p>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={userImage}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div>
                  <h2 className="text-xl">{userName}</h2>
                  <p className="text-[12px] uppercase opacity-50">
                    {designation}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
