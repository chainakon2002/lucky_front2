import { useContext } from "react";
import ReservedContext, { ReservedContextProvider } from "../contexts/ReserveContext";
import InfoContext from "../contexts/infoContext";

export default function AdminReserved() {
    return (
        <ReservedContextProvider>
            <ReserveDashboard />
        </ReservedContextProvider>
    );
}

function ReserveDashboard() {
    const { adminData } = useContext(ReservedContext);
    const { member } = useContext(InfoContext);

    return (
      <div className="p-4 flex flex-col space-y-4">
          {/* Display count of items */}
          <div className="text-lg font-semibold mb-4 text-center">
              ทั้งหมด : {adminData ? adminData.length : 0} การจอง
          </div>
          {adminData && adminData.map(el => (
              <ReserveItem member={member} key={el.id} item={el} />
          ))}
      </div>
  )
}

function ReserveItem({ item, member }) {
    const { deleteReserved } = useContext(ReservedContext);

    const hdlDelete = (e) => {
        e.preventDefault();
        deleteReserved(item.id);
    }

    const user = member.find(el => el.id === item.user_id);
    const { name, lastname } = user || { name: "", lastname: "" };

    const hdlSubmit = (e) => {
        e.preventDefault();
        // Update function should be defined or passed as a prop
        updateBooking(item.id, update);
        setIsUpdate(false);
    }

    return (
        <div className="p-4">
            <div className="bg-white shadow-lg rounded-[15px] p-6 mb-4 w-full lg:w-3/4 mx-auto">
                <div className="flex items-center mb-4">
                    <div className="text-[20px] font-bold mr-4">Name</div>
                    <div className="text-[18px] text-gray-700 font-medium">{name} {lastname}</div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="text-[20px] font-bold mr-4">Datetime</div>
                    <div className="text-[18px] text-gray-700 font-medium">{new Date(item.datetime).toUTCString().split("GMT")[0]}</div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="text-[20px] font-bold mr-4">Phone</div>
                    <div className="text-[18px] text-gray-700 font-medium">{item.phone}</div>
                </div>
                <div className="flex items-center mb-4">
                    <div className="text-[20px] font-bold mr-4">Disease</div>
                    <div className="text-[18px] text-gray-700 font-medium">{item.disease}</div>
                </div>

                <div className="flex items-center justify-end space-x-4">

                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={hdlDelete}>ยกเลิก</button>
                </div>
            </div>
        </div>
    )
}
