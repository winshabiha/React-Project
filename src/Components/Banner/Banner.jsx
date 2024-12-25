import React from 'react';
import { FaTableCellsRowUnlock } from "react-icons/fa6";
import { RiCompassDiscoverFill } from "react-icons/ri";

const Banner = () => {
    return (
        <div className="hero bg-indigo-200 min-h-[92vh] max-w-6xl mx-auto mt-20">
            
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-4xl font-bold flex justify-center"><FaTableCellsRowUnlock className='mb-10 mr-2'/> Unlock Your Career Potential!</h1>
                    <p>Explore a world of opportunities with our comprehensive career facilities. <br /> From resume building and interview preparation to career counseling and <br /> job placement, we are here to help you succeed!</p>
                    <button className="btn btn-primary mt-4"> <RiCompassDiscoverFill />Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;