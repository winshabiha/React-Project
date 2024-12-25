import React, { useEffect, useState } from 'react';
import Job from './Job/Job';

const Jobs = () => {
    const [value, setValue] = useState(4)
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('https://next-level-two-ashen.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h2 className='text-center font-bold text-4xl border border-b-indigo-500 shadow-lg text-indigo-500 py-3 rounded-xl '>Jobs</h2>
            <p className='text-center mt-3'>Looking for your next career move? <br /> Discover diverse job opportunities across various industries.Whether  <br />you're a fresh graduate, a seasoned professional, or  seeking a career change, <br /> the perfect role is waiting for you!</p>

            <div className='mt-8 grid grid-cols-2 gap-10'>
                {
                    jobs.length?jobs.slice(0, value).map(job => <Job job={job} key={job._id}></Job>):<div className='grid grid-cols-3 gap-96'>
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
            <div className='mt-5 flex justify-center'>

                {
                    value === 4 ? <button className='btn btn-primary ' onClick={() => setValue(jobs.length)}>VIew All</button> : <button className='btn btn-primary ' onClick={() => setValue(4)}>Show Four</button>
                }
            </div>
        </div>
    );
};

export default Jobs;