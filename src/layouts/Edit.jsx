import React, { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function Edit() {

    const { user, updateProfile } = useContext(AuthContext)
    const [isUpdate, setIsUpdate] = useState(false)
    const [update, setUpdate] = useState({
        name: user.name,
        lastname: user.lastname,
        phone: user.phone,
        email: user.email
    })

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
        updateProfile(update)
        setIsUpdate(false)
    }

    return (
        <>
            {isUpdate ? (<div className='max-w-md mx-auto mt-8 bg-pink-100 p-8 rounded shadow-lg'>
                <h2 className='text-2xl font-bold mb-4 text-pink-500'>Edit Information</h2>
                <form onSubmit={hdlSubmit}>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Name
                        </label>
                        <input
                            onChange={hdlChange}
                            type='text'
                            value={update.name}
                            name='name'
                            className='w-full border-2 border-pink-500 p-2 rounded focus:outline-none focus:border-pink-700 text-gray-500'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Lastname
                        </label>
                        <input
                            onChange={hdlChange}
                            type='text'
                            name='lastname'
                            value={update.lastname}
                            className='w-full border-2 border-pink-500 p-2 rounded focus:outline-none focus:border-pink-700 text-gray-500'
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Email
                        </label>
                        <input
                            onChange={hdlChange}
                            type='email'
                            name='email'
                            value={update.email}
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
                <h2 className='text-2xl font-bold mb-4 text-pink-500'>Edit Information</h2>
                <form>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Name
                        </label>
                        <input
                            readOnly
                            type='text'
                            value={update.name}
                            name='name'
                            className='w-full border-2 border-pink-500 p-2 rounded focus:outline-none focus:border-pink-700 text-gray-300'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Lastname
                        </label>
                        <input
                            readOnly
                            type='text'
                            name='name'
                            value={update.lastname}
                            className='w-full border-2 border-pink-500 p-2 rounded focus:outline-none focus:border-pink-700 text-gray-300'
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-gray-700 font-bold mb-2 text-pink-500'>
                            Email
                        </label>
                        <input
                            readOnly
                            type='email'
                            name='email'
                            value={update.email}
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