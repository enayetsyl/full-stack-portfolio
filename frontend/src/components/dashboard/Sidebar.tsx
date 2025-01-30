'use client';

const Sidebar = ({
  setActiveComponent,
}: {
  setActiveComponent: (component: string) => void;
}) => {
  const links = [
    { name: 'Skill', component: 'Skill' },
    { name: 'Experience', component: 'Experience' },
    { name: 'Projects', component: 'Projects' },
    { name: 'Blogs', component: 'Blogs' },
  ];

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 text-lg font-bold border-b text-black">
        My Dashboard
      </div>
      <nav>
        <ul>
          {links?.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveComponent(link?.component)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
              >
                {link?.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
