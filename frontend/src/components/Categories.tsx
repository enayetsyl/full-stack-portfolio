import { useState } from 'react';
import { workCategories } from '../../public/datas/data';

type CategoriesProps = {
  filterItems: (category: string) => void;
};

const Categories = ({ filterItems }: CategoriesProps) => {
  const [active, setActive] = useState('all');

  return (
    <>
      {workCategories.map((category, i) => {
        return (
          <div key={i}>
            <p
              className={`uppercase py-2 px-4 rounded hover:bg-[#36d7b7] hover:bg-opacity-20 hover:text-[#36d7b7] duration-500 cursor-pointer ${
                category.category === active &&
                'bg-[#36d7b7] bg-opacity-20 text-[#36d7b7]'
              }`}
              onClick={() => {
                filterItems(category.category);
                setActive(category.category);
              }}
            >
              {category.text}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Categories;