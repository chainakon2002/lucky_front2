import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReservedContext, {
  ReservedContextProvider,
} from "../contexts/ReserveContext";
import { motion } from 'framer-motion';
import './Rese.css';

export default function Reserved() {
  return (
    <ReservedContextProvider>
      <ReserveDashboard />
    </ReservedContextProvider>
  );
}

function ReserveDashboard() {
  const { data } = useContext(ReservedContext);
  
  return (
    <div style={{ maxWidth: '88%', margin: '0 auto' }} className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-200 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Datetime</th>
            <th scope="col" className="px-6 py-3">Phone</th>
            <th scope="col" className="px-6 py-3">Disease</th>
            <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(el => (
            <ReserveItem key={el.id} item={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReserveItem({ item }) {
  const navigate = useNavigate();

  const hdlClick = () => {
    navigate('/editresrve/' + item.id);
  };

  return (
    <motion.tr
      className="bg-white border-b bg-white bg-white hover:bg-gray-50 dark:hover:bg-gray-100"
      initial={{ opacity: 0, y: 20 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // End state
      transition={{ duration: 0.3 }} // Animation duration
    >
      <td className="px-6 py-4">
        {new Date(item.datetime).toUTCString().split("GMT")[0]}
      </td>
      <td className="px-6 py-4">
        {item.phone}
      </td>
      <td className="px-6 py-4">
        {item.disease}
      </td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={hdlClick}
          className="button-edit"
        >
          Edit
        </button>
      </td>
    </motion.tr>
  );
}
