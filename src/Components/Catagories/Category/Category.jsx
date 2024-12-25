import React from 'react';
import { GrTechnology } from "react-icons/gr";

const Category = ({ category }) => {
    // console.log(category);
    const { img, category_name } = category

    return (
        <div>
            <div className='border rounded-lg p-14 bg-indigo-100'>
                <img src={img} alt="" />
                <h3 className='font-bold text-xl flex justify-center items-center gap-2'><GrTechnology />{category_name}</h3>
            </div>
        </div>
    );
};

export default Category;