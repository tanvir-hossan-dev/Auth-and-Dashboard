import React from "react";
import { Input, Menu, MenuHandler, MenuList, MenuItem, Avatar, Typography } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch } from "react-redux";
import { userLogedOut } from "../Redux/features/user/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const hanldeLogOut = () => {
    dispatch(userLogedOut());
    localStorage.removeItem("Auth-Dashboard");
  };
  return (
    <div className="w-screen  px-8 pt-7">
      {/* User Navbar Section  Start*/}
      <div className="mx-auto mb-8">
        <div className=" mx-auto flex items-center justify-between">
          <div className="w-[500px]">
            <Input color="blue" className="bg-[#F0F5FA]" label="Search" icon={<AiOutlineSearch />} />
          </div>
          <div className="flex items-center">
            <IoMdNotifications className="mr-6 text-[30px] text-[#B0B7C3]" />
            <Menu>
              <MenuHandler>
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  className="cursor-pointer"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </MenuHandler>
              <MenuList>
                <MenuItem className="flex items-center gap-2">
                  <Typography variant="small" className="font-normal">
                    Tanvir Hossan
                  </Typography>
                </MenuItem>

                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-2 " onClick={hanldeLogOut}>
                  <Typography variant="small" className="font-normal">
                    Sign Out
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
      {/* User Navbar Section  End*/}

      <div>
        <h2 className="text-[#323B4B] text-[30px] font-semibold font-inter mb-4">Users List</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Options </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
