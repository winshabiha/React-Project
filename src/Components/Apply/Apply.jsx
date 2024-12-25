import { useEffect, useState } from "react";
import { deleteDataFromLocalStorage, getDataFromLocalStorage } from "../../LocalStorage/LocalStorage";
import { useLoaderData, useNavigate } from "react-router-dom";
import AppliedJobs from "./AppliedJobs";
import { ToastContainer, toast } from 'react-toastify';


const Apply = () => {
    const values = useLoaderData()
    const [localData, setLocalData] = useState([])
    // console.log(localData)

    useEffect(() => {
        const data = getDataFromLocalStorage()
        const emptyErray = []

        for (const da of data) {
            const filterData = values.find(value => value._id === da)
            emptyErray.push(filterData)
        }
        setLocalData(emptyErray)

    }, [])

    const handleDelete = (id) => {
        const data = localData.filter(local => local._id !== id)
        if (data) {
            toast('It has been successfully deleted')
            setLocalData(data)
        }
        deleteDataFromLocalStorage(id)
    }

    const handleSort=(e)=>{
        const selectedLocation = e.target.value
        const filterData = localData.filter(data=>data.location === selectedLocation)
        if(selectedLocation){
            setLocalData(filterData)
        }
    }

    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h2 className='text-center mt-20 font-bold text-3xl border border-b-indigo-500 shadow-lg text-blue-500 py-3 rounded-xl bg-gradient-to-r from-indigo-500'>Applied Jobs</h2>
            <select className="select select-primary w-full max-w-xs mt-10" onChange={handleSort}>
                <option disabled selected>Select Your Location</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Rajsahi</option>
                <option>Gazipur</option>
            </select>
            <div>
                {
                    localData.map(local => <AppliedJobs key={local._id} handleDelete={handleDelete} local={local}></AppliedJobs>)
                }
            </div>

            <ToastContainer />
        </div>
    );
};

export default Apply;