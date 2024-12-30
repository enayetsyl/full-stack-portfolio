"use client"
import Link from 'next/link';
import { useState } from 'react';
import { navData } from '../../public/datas/data';
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname  = usePathname();

  return (
    <>
      {/* desktop navigation */}
      <div className="hidden xl:block w-[270px] border-b border-r custom_border fixed h-screen">
        <div className="p-8 flex flex-col justify-center items-center border-b custom_border">
          <div>
            <Link href="/">
              <h1 className="text-xl leading-6 mb-1">Enayetur Rahman</h1>
            </Link>
            <p className="opacity-50 font-light">Full Stack Developer</p>
          </div>
        </div>

        <div className="hidden xl:flex flex-col justify-center items-center">
          <div className="flex flex-col w-full">
            {navData.map((item, i) => {
              return (
                <Link
                  href={`${item.link}`}
                  key={i}
                  className={`flex items-center py-5 px-11 border-b custom_border group hover:bg-white hover:bg-opacity-10 duration-300 ${
                    pathname === item.link && 'bg-white bg-opacity-10'
                  }`}
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                    className="mr-2.5"
                  />
                  <p className="opacity-50 group-hover:opacity-100 duration-500">
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div className="relative block xl:hidden w-full py-6 custom_border border-b">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl leading-6 mb-1">Md Enayetur Rahman</h1>
            </Link>
            {/* hamburger */}
            <div
              className="w-12 h-12 relative flex justify-center items-center cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            >
              {!open ? (
                <div>
                  <span className="relative block w-8 h-0.5 bg-white rounded -translate-y-1.5"></span>
                  <span className="relative block w-8 h-0.5 bg-white rounded"></span>
                  <span className="relative block w-8 h-0.5 bg-white rounded translate-y-1.5"></span>
                </div>
              ) : (
                <div>
                  <span className="relative block w-8 h-0.5 bg-white rounded rotate-45"></span>
                  <span className="relative block w-8 h-0.5 bg-white rounded -rotate-45"></span>
                </div>
              )}
            </div>
            <div
              className={`absolute left-0 w-full py-5 text-center bg-[#121212] ${
                open ? 'top-[76px]' : '-top-[400px]'
              } z-50 duration-300`}
            >
              {' '}
              <div className="flex flex-col w-full">
                {navData.map((item, i) => {
                  return (
                    <Link
                      href={`${item.link}`}
                      key={i}
                      className={`flex items-center py-5 px-11 border-b custom_border group hover:bg-white hover:bg-opacity-10 duration-300 ${
                        pathname === item.link && 'bg-white bg-opacity-10'
                      }`}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        className="mr-2.5"
                      />
                      <p className="opacity-50 group-hover:opacity-100 duration-500">
                        {item.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;