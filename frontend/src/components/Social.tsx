import Link from "next/link";
import { socialData } from "../../public/datas/data";

type SocialProps = {
  center: boolean;
  marginTop: boolean;
};

const Social = ({ center, marginTop }: SocialProps) => {
  return (
    <div
      className={`flex gap-6 ${marginTop && 'mt-11'} ${
        center && 'justify-center'
      }`}
    >
      {socialData?.map((item, i) => {
        return (
          <Link
            href={item?.link}
            target="_blank"
            className={`hover:-translate-y-2 duration-300 opacity-75 `}
            key={i}
          >
            <span dangerouslySetInnerHTML={{ __html: item?.icon }} />
          </Link>
        );
      })}
    </div>
  );
};

export default Social;