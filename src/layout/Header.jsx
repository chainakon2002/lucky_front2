

import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  
]

const userNav = [
  { to : '/Information', text: '𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛' },

  { to : '/new', text: '𝑅𝑒𝑠𝑒𝑟𝑣𝑒' },
  
  { to : '/reserve', text: '𝑅𝑒𝑠𝑒𝑟𝑣𝑎𝑡𝑖𝑜𝑛 𝑙𝑖𝑠𝑡' },

  
]

const adminNav = [
  

  { to : '/infoadmin', text: '𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛' },
  
  { to : '/reserve', text: '𝑅𝑒𝑠𝑒𝑟𝑣𝑎𝑡𝑖𝑜𝑛 𝑙𝑖𝑠𝑡' },


]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? user?.role ==='ADMIN' ? adminNav : userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    
<div className="container mx-auto p-4">
  <div className="navbar bg-white shadow-lg rounded-lg">
    <div className="flex-1 flex items-center">
      <Link to="/Home" className="mr-4">
        <img
          src="1.7.jpg"
          className="w-20 h-20 rounded-full border-2 border-pink-500"
          alt="Logo"
        />
      </Link>
      <a className="btn btn-ghost text-xl text-gray-800">
        𝐻𝑜𝑠𝑝𝑖𝑡𝑎𝑙 𝑎𝑠 𝐼 𝑤𝑖𝑠ℎ𝑡 {user?.id ? user.username : 'Guest'}
      </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        {finalNav.map((el) => (
          <li key={el.to}>
            <Link to={el.to} className="text-gray-800 hover:text-pink-500">
              {el.text}
            </Link>
          </li>
        ))}
        {user?.id && (
          <li>
            <Link to="#" onClick={hdlLogout} className="text-gray-800 hover:text-pink-500">
              𝐿𝑜𝑔𝑜𝑢𝑡
            </Link>
          </li>
        )}
      </ul>
    </div>
  </div>
</div>

  );
}
