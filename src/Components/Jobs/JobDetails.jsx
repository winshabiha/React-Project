import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { BsCardHeading } from "react-icons/bs";
import { SiHyperskill } from "react-icons/si";
import { GrUserExpert } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { BsHourglassSplit } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { GrValidate } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../LocalStorage/LocalStorage';


const JobDetails = () => {
    const values = useLoaderData()
    const {_id, companyName, description, duty_hours, deadline, job_title, experience, jobSummary, postDate, salary, skills, location } = values

    const navigate = useNavigate()

    const handleSubmit = () => {
        const data = getDataFromLocalStorage()
        const exists = data.find(da=>da===_id);
        if(!exists){
            setDataToLocalStorage(_id)
            navigate('/apply')
            toast('Applied successfully')
        }
        else{
            toast.error('already exists')
        }
    }

    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h2 className='text-center mt-20 font-bold text-3xl border border-b-indigo-500 shadow-lg text-blue-500 py-3 rounded-xl bg-gradient-to-r from-indigo-500'>Job Details</h2>
            <div className='grid grid-cols-3 mt-20 gap-10'>
                <div className='col-span-2 p-10 border-2 border-blue-300 rounded-xl'>
                    <h1 className='font-bold text-2xl'>Job Title:</h1>
                    <hr className='border border-black mt-3' />
                    <p className='text-xl mt-2'>{job_title}</p>
                    <p className='text-xl font-bold mt-6'>Job Summary:</p>
                    <hr className='border border-black mt-3' />
                    <p className='text-xl mt-2'>{jobSummary}</p>
                    <p className='text-xl font-bold mt-6'>Description:</p>
                    <hr className='border border-black mt-3' />
                    <p className='text-xl mt-2'>{description}</p>
                </div>
                <div className='p-10 border-2 border-blue-300 rounded-xl'>
                    <h1 className='font-bold text-2xl flex items-center justify-center gap-2 mr-12'><BsCardHeading className='text-indigo-500' />Company Name:</h1>
                    <p className='text-xl font-semibold mt-3'>{companyName}</p>
                    <h1 className='font-bold text-2xl mt-10 flex items-center justify-center gap-2 mr-44'><SiHyperskill className='text-indigo-500' />Skills:</h1>
                    <p className='text-xl font-semibold mt-3'>{skills}</p>
                    <h1 className='font-bold text-2xl mt-10 flex items-center justify-center gap-2 mr-28'><GrUserExpert className='text-indigo-500' />Experience:</h1>
                    <p className='text-xl font-semibold mt-3'>{experience}</p>
                    <h1 className='font-bold text-2xl mt-10 flex items-center justify-center gap-2 mr-36'><FaLocationDot className='text-indigo-500' />Location:</h1>
                    <p className='text-xl font-semibold mt-3'>{location}</p>
                    <div className='flex gap-8 mt-10'>
                        <div>
                            <h1 className='font-bold text-xl mt-2 flex items-center justify-center gap-3'><BsHourglassSplit className='text-indigo-500' />Duty Hours:</h1>
                            <p className='text-lg font-semibold mt-3'>{duty_hours}</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl mt-2 flex items-center justify-center gap-3'><FaSackDollar className='text-indigo-500' />Salary:</h1>
                            <p className='text-lg font-semibold mt-3'>{salary}</p>
                        </div>
                    </div>
                    <div className='flex gap-8 mt-10'>
                        <div>
                            <h1 className='font-bold text-xl mt-2 flex items-center justify-center gap-2'><GrValidate className='text-indigo-500' />Deadline:</h1>
                            <p className='text-xl font-semibold mt-3'>{deadline}</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl mt-2 flex items-center justify-center gap-2'><CgCalendarDates className='text-indigo-500' />Post Date:</h1>
                            <p className='text-xl font-semibold mt-3'>{postDate}</p>
                        </div>
                    </div>
                    <div className='text-center'>
                    <button className='btn btn-primary mt-5 flex' onClick={handleSubmit}>Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;