import React from 'react';
import { deleteDataFromLocalStorage } from '../../LocalStorage/LocalStorage';

const AppliedJobs = ({ local,handleDelete }) => {
    // console.log(local)
    const {_id,job_title,image,jobSummary,location}= local

    return (
        <div className="hero bg-base-200 min-h-[70vh]">
            <div className="hero-content flex-col lg:flex-row">
                <img width={300}
                    src={image}
                    className="rounded-lg shadow-2xl h-[200px]" />
                <div>
                    <h1 className="text-5xl font-bold">{job_title}</h1>
                    <p className="py-6">{jobSummary}</p>
                    <p>{location}</p>
                    <div className='text-end'>
                    <button className="btn btn-primary px-10" onClick={()=>handleDelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;