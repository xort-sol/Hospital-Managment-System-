// type Props = {};

import { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import a1 from "../../../assets/avatar/a1.jpg";
import { useSelector } from "react-redux";

import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const DashboardTopbar = () => {
    const { user } = useSelector((state: any) => state.auth);
    const [searchItem, setSearchItem] = useState("");

    // State variables to manage the visibility of language, notifications, and profile elements
    const [showLanguage, setShowLanguage] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <div className="h-full w-full ">
            <div className="h-full w-full p-2 flex justify-between items-center">
                {/* Search */}

                <div className="w-3/5 flex justify-start items-center px-5 py-1 bg-[#fff] rounded-xl">
                    <BsSearch className="text-xl text-blue_color" />

                    <input
                        type="text"
                        className="py-2 px-4 bg-transparent w-full"
                        placeholder="Search"
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </div>

                {/* Elements & Icons */}

                <div className="flex items-center justify-end gap-5 w-2/5">
                    {/* Language */}
                    <div className=" relative">
                        <p
                            className="font-semibold cursor-pointer flex gap-2 justify-center items-center"
                            onClick={() => setShowLanguage(!showLanguage)}
                        >
                            Eng(us) <IoIosArrowDown />
                        </p>

                        {showLanguage && (
                            <div className="absolute bg-white h-40 w-40 border rounded-md p-2 mt-2">
                                {/* Add language options here */}
                            </div>
                        )}
                    </div>

                    {/* Notification */}

                    <div
                        className="  bg-[#FFFAF1] rounded-md p-2 ml-4 cursor-pointer relative"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <div className="flex justify-center items-center w-full h-full">
                            <MdOutlineNotifications className="text-2xl text-[#FFA412]" />

                            <div className="absolute right-1 top-1 w-2 h-2 bg-[#EB5757] animate-ping rounded-full"></div>
                        </div>

                        {showNotifications && (
                            <div className="absolute bg-white h-40 w-40 border rounded-md p-2 mt-2">
                                {/* Add language options here */}
                            </div>
                        )}
                    </div>

                    {/* profile */}

                    <div
                        className="  relative cursor-pointer "
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        <div className=" flex justify-center items-center gap-3">
                            {/* img */}
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                {/* Have to add dynamic image here */}
                                <img
                                    src={a1}
                                    alt="a1name"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className=" flex flex-col justify-start items-start ">
                                <p className="font-semibold text-lg">
                                    {user?.name}
                                </p>

                                <p>{user?.id}</p>
                            </div>
                            <IoIosArrowDown />
                        </div>
                        {/* dropdown */}

                        {showProfile && (
                            <div className="absolute bg-white h-40 w-40 border rounded-md p-2 mt-2">
                                {/* Add language options here */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTopbar;
