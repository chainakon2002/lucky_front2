import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RegisterForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    card_id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    phone: ''
  });

  const hdlChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async e => {
    try {
      e.preventDefault();
      // validation

      const rs = await axios.post('http://localhost:8000/auth/register', input);
      if (rs.status === 200) {
        alert('Register Successful');
        navigate('/login');
      }
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleReset = () => {
    setInput({
      card_id: '',
      name: '',
      lastname: '',
      email: '',
      password: '',
      phone: ''
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 font-[sans-serif] min-h-screen flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow mt-16"
      >
        <div className="flex justify-center mb-8">
          <motion.img
            src="1.7.jpg"
            className="w-20 h-20 rounded-full border-2 border-pink-500"
            alt="1.7"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        <h2 className="text-gray-800 text-center text-2xl font-bold">Register</h2>
        <form className="mt-8 space-y-4" onSubmit={hdlSubmit}>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Card ID</label>
            <motion.input
              type="text"
              name="card_id"
              value={input.card_id}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="Enter your card ID"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Name</label>
            <motion.input
              type="text"
              name="name"
              value={input.name}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="Enter your name"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
            <motion.input
              type="text"
              name="lastname"
              value={input.lastname}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="Enter your last name"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email</label>
            <motion.input
              type="email"
              name="email"
              value={input.email}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="Enter your email"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <motion.input
              type="password"
              name="password"
              value={input.password}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="Enter your password"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Phone</label>
            <motion.input
              type="text"
              name="phone"
              value={input.phone}
              onChange={hdlChange}
              className="w-full text-gray-800 text-sm bg-gray-200 border border-gray-300 px-4 py-3 rounded-[12px] outline-blue-600"
              placeholder="Enter your phone number"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          </div>
          <div className="mt-8 flex justify-between">
            <motion.button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Register
            </motion.button>
            <motion.button
              type="button"
              onClick={handleReset}
              className="ml-4 w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-gray-400 hover:bg-gray-500 focus:outline-none"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Reset
            </motion.button>
          </div>
        </form>
        <p className="text-gray-800 text-sm mt-8 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline ml-1 font-semibold">
            Sign In
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
