import { expertise } from "../../public/datas/data";


const Tooling = () => {
  return (
    <div className="container px-4 mx-auto py-20">
      <h2 className="text-3xl font-medium">My Expertise</h2>
      <div className="grid grid-cols-4 gap-4 xl:gap-12 py-12">
        {expertise.map((item, i) => {
          return (
            <div
              className="col-span-4 sm:col-span-2 lg:col-span-1 text-center h-full"
              key={i}
            >
              <div className="w-full flex justify-start items-start gap-2 border custom_border rounded-xl p-4 md:p-8 h-full group">
                <span
                  dangerouslySetInnerHTML={{ __html: item.src }}
                  className="mr-2.5 w-12 h-12 grayscale group-hover:grayscale-0 duration-300"
                />
                <div className="text-start">
                  <h2 className="text-xl">{item.title}</h2>
                  <p className="uppercase opacity-50">{item.percentage}%</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tooling;