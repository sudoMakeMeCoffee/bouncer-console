import { useEffect, useState } from "react";
import ProfileIcon from "../../assets/images/profile-icon.png";
import axios from "axios";
import { API_URL } from "../../Consts";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/utils";
const AppUsersTable = () => {
  const { appId } = useParams();
  const [appUsers, setAppUsers] = useState([]);

  const fetchAppUsers = () => {
    axios
      .get(`${API_URL}/client/app/user/${appId}`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setAppUsers(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchAppUsers();
  }, []);
  return (
    <table className="w-full text-left text-sm">
      <thead className="bg-[#111113]">
        <tr className="font-semibold text-xs text-gray-400">
          <th className="p-3">User</th>
          <th className="p-3">Joined</th>
        </tr>
      </thead>

      <tbody className="">
        {appUsers.map((user) => (
          <tr className="bg-[#1E1E22]">
            <td className="flex items-center gap-3 p-3">
              <img
                src={ProfileIcon}
                alt=""
                className="w-[45px] h-[45px] rounded-full"
              />

              <div className="flex flex-col">
                <span className="text-white">{user.email}</span>
                <span className="text-gray-400">{user.email}</span>
              </div>
            </td>
            <td className="p-3">{formatDate(user.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppUsersTable;
