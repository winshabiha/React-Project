import React from 'react';
import { IoMdStopwatch } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {companyName,salary, image,category_name, job_title,duty_hours,location,_id} = job;
    return (
        <div className='border-2 rounded-xl'>
            <div className='p-5'>
            <img className='h-[200px]' src={image} alt="" />
            <p className='text-xl font-bold'>{job_title}</p>
            <p className='text-lg font-bold'>{companyName}</p>
            <div className='flex gap-4'>
            <p className='text-lg font-semibold flex items-center gap-2'><MdAddLocationAlt />({location})</p>
            <p className='text-lg flex items-center font-semibold gap-2'><FaSackDollar />{salary}</p>
            </div>
            <p className='text-xl font-semibold flex items-center gap-2'><IoMdStopwatch />{duty_hours}</p>
            <Link to={`/jobs/${_id}`}><button className='btn btn-primary mt-3'>Job Details</button></Link>
            </div>
        </div>
    );
};

export default Job;