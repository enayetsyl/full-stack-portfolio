import Image from "next/image";
import { clients } from "../../public/datas/data";
// Extend JSX intrinsic elements to include the 'marquee' tag
// Extend JSX intrinsic elements to include the 'marquee' tag
declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLMarqueeElement> & {
          direction?: string;
          scrollamount?: number;
          scrolldelay?: number;
          behavior?: "scroll" | "slide" | "alternate";
        },
        HTMLMarqueeElement
      >;
    }
  }
}

const ClientLogos = () => {
  return (
    <marquee direction="left" className="flex items-center gap-6 py-12">
      {clients.map((client, i) => {
        return (
          <div
            className="inline-flex justify-center items-center h-full grayscale hover:grayscale-0 pr-32 opacity-50"
            key={i}
          >
            <Image src={client.src} alt={client.alt} 
            height={100}
            width={100}
            
            />
            {/* <span dangerouslySetInnerHTML={{ __html: client.src }} /> */}
          </div>
        );
      })}
    </marquee>
  );
};

export default ClientLogos;