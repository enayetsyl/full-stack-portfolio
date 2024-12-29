import Link from "next/link";

const Resume = () => {
  return (
    <div className="absolute bg-[#36d7b7] bg-opacity-20 py-2 px-3 rounded-md top-12 xl:top-5 right-5">
      <p className="text-[#36d7b7] font-light">
      <Link href="/Resume_Md_Enayetur_Rahman.pdf" legacyBehavior>
          <a download="Resume_Md_Enayetur_Rahman.pdf" target="_blank">Resume</a>
        </Link>
      </p>
    </div>
  );
};

export default Resume;
