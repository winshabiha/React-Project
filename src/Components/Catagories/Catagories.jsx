import React, { useEffect, useState } from 'react';
import Category from './Category/Category';

const Catagories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://next-level-two-ashen.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h2 className='text-center font-bold text-4xl border border-b-indigo-500 shadow-lg text-indigo-500 py-3 rounded-xl '>Catagory</h2>
            <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Quam recusandae voluptatem quod obcaecati ad laudantium nostrum commodi, rerum quis veritatis!</p>
            <div className='mt-10 grid grid-cols-3 gap-20'>
                {
                    categories.length ? categories.map(category => <Category key={category.id} category={category}></Category>) : <div className='grid grid-cols-3 gap-96'>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Catagories;