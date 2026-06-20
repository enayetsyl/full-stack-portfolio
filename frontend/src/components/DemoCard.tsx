export type Demo = {
  title: string;
  description: string;
  youtubeId: string;
};

const DemoCard = ({ demo }: { demo: Demo }) => {
  const { title, description, youtubeId } = demo;

  return (
    <div className="h-full flex flex-col gap-4 border custom_border rounded-xl p-6 md:p-8 text-white">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="opacity-75">{description}</p>
    </div>
  );
};

export default DemoCard;
