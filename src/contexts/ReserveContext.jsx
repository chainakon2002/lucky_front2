import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ReservedContext = createContext()

function ReservedContextProvider(props) {
  const [data, setData] = useState(null)
  const [adminData, setAdminData] = useState(null)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const showBooking = async () => {
      try {
        let token = localStorage.getItem('token')
        if(!token) { return }
        const rs = await axios.get("http://localhost:8000/booking/show",{
          headers : { Authorization : `Bearer ${token}` }
        })
        // console.log(rs.data)
        setData(rs.data)

      } catch (error) {
        alert(error);
      }
    };

    showBooking();
  }, [trigger])

  useEffect(() => {
    const showBooking = async () => {
      try {
        let token = localStorage.getItem('token')
        if(!token) { return }
        const rs = await axios.get("http://localhost:8000/booking/admin/show",{
          headers : { Authorization : `Bearer ${token}` }
        })
        // console.log(rs.data)
        setAdminData(rs.data)

      } catch (error) {
        alert(error);
      }
    };

    showBooking();
  }, [trigger])

  const createBooking = async (input) => {
    try {
      // console.log(input);
      const rs = await axios.post(`http://localhost:8000/booking/creacte`, input)
      if (rs.status === 200) {
        alert('Create new OK')
        location.replace('/reserve')

      }

    } catch (err) {
      alert(err.message)
    }
  }

  const deleteReserved = async (bookingId) => {
    try {
        const re = await axios.delete(`http://localhost:8000/booking/delete/${bookingId}`);
        setTrigger(prv => !prv)
        if (re.status === 200) {
            alert('Delete Successfully')
        }

    } catch (error) {
        alert(error.message)
        
    }
  }

  const updateBooking = async (bookingId, data) => {
    try {
      const token = localStorage.getItem('token')
      const rs = await axios.patch(`http://localhost:8000/booking/patch/${bookingId}`, data, {
        headers: {Authorization: `Bearer ${token}`}
      })
      if (rs.status === 200) {
        alert('Update Successfully')
    }

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ReservedContext.Provider value={{ data, createBooking, adminData, deleteReserved, updateBooking }}>
      {props.children}
    </ReservedContext.Provider>
  );
}


export default ReservedContext;
export { ReservedContextProvider };