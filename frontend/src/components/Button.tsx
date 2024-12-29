import Link from "next/link";

const Button = ({ data }) => {
  return (
    <Link
      href={data.link}
      className="flex justify-center items-center w-full border border-white border-opacity-10 hover:border-opacity-[0.02] hover:bg-white hover:bg-opacity-[0.02] duration-300 p-3.5 rounded-lg text-center mt-4"
    >
      {data.text}
    </Link>
  );
};

export default Button;
