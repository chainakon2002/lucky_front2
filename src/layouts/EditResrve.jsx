import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import ReservedContext from '../contexts/ReserveContext';
import axios from 'axios';

export default function Edit() {

    // const { data } = useContext(ReservedContext)

    // console.log(data);
    const id = window.location.pathname.split('/')[2]
    const [reserved, setReserved] = useState(null)


    useEffect(() => {
        const showBooking = async () => {
            try {
                let token = localStorage.getItem('token')
                if (!token) { return }
                const rs = await axios.get(`http://localhost:8000/booking/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                // console.log(rs.data)
                setReserved(rs.data)

            } catch (error) {
                alert(error);
            }
        };

        showBooking();
    }, [])

    return (
        <div>
            {reserved && <FormEdit reserved={reserved} />}
        </div>
    )

}
function FormEdit({ reserved }) {
    const { updateBooking } = useContext(ReservedContext)
    const [isUpdate, setIsUpdate] = useState(false)
    const [update, setUpdate] = useState({
        phone: reserved.phone,
        disease: reserved.disease
    })

    // console.log(update);

    const hdlClick = (e) => {
        e.preventDefault()
        setIsUpdate(!isUpdate)
    }

    const hdlCancel = () => {
        setIsUpdate(false)
    }

    const hdlChange = (e) => {
        setUpdate(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlSubmit = (e) => {
        e.preventDefault()
        updateBooking(reserved.id, update)
        setIsUpdate(false)
    }

    return (
        <>
            {isUpdate ? (<div className='max-w-md mx-auto mt-8 bg-pink-100 p-8 rounded shadow-lg'>
                <h2 className='text-2xl font-bold mb-4 text-pink-500'>Edit Information</h2>
                <form onSubmit={hdlSubmit}>       
                    <div className='mb-4'>
                        <label htmlFor='phone' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Phone
                        </label>
                        <input
                            onChange={hdlChange}
                            type='text'
                            value={update.phone}
                            name='phone'
                            className='w-full border-2 border-pink-500 p-2 rounded focus:outline-none focus:border-pink-700 text-gray-500'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='disease' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Disease
                        </label>
                        <input
                            onChange={hdlChange}
                            type='text'
                            name='disease'
                            value={update.disease}
                            className='w-full border-2 border-pink-500 p-2 rounded focus:outline-none focus:border-pink-700 text-gray-500'
                        />
                    </div>




                    <button
                        type='submit'
                        className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none mr-2'
                    >
                        Save
                    </button>
                    <button
                        onClick={hdlCancel}
                        type='submit'
                        className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                    >
                        Cancel
                    </button>
                </form>
            </div>) : (<div className='max-w-md mx-auto mt-8 bg-pink-100 p-8 rounded shadow-lg'>
                <h2 className='text-2xl font-bold mb-4 text-pink-500'>Edit Reserve</h2>
                <form>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Phone
                        </label>
                        <input
                            readOnly
                            type='text'
                            value={update.phone}
                            name='phone'
                            className='w-full border-2 border-pink-500 p-2 rounded focus:outline-none focus:border-pink-700 text-gray-300'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Disease
                        </label>
                        <input
                            readOnly
                            type='text'
                            name='disease'
                            value={update.disease}
                            className='w-full border-2 border-pink-500 p-2 rounded focus:outline-none focus:border-pink-700 text-gray-300'
                        />
                    </div>


                    <button
                        onClick={hdlClick}
                        type='submit'
                        className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
                    >
                        Edit
                    </button>
                </form>
            </div>)}
        </>
    );
}