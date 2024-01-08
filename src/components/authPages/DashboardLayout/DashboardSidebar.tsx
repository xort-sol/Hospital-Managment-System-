import { Link, useLocation } from "react-router-dom";

// Importing Icons

import { MdOutlineSettings, MdSpaceDashboard } from "react-icons/md";
import { FaHandHoldingMedical, FaRegHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import {
    LiaAmbulanceSolid,
    LiaFileInvoiceDollarSolid,
    LiaNotesMedicalSolid,
    LiaWpforms,
} from "react-icons/lia";
import { HiChatAlt2 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RxExit } from "react-icons/rx";

const DashboardSidebar = () => {
    const { user } = useSelector((state: any) => state.auth);

    const { pathname } = useLocation();

    const paitentList = [
        {
            key: 1,
            url: "/patient/dashboard",
            icon: MdSpaceDashboard,
            name: "Dashboard",
        },

        {
            key: 2,
            url: "/patient/hospitals",
            icon: FaRegHospital,
            name: "Hospitals",
        },
        {
            key: 3,
            url: "/patient/ambulance",
            icon: LiaAmbulanceSolid,
            name: "Ambulance",
        },
        {
            key: 4,
            url: "/patient/medicalfile",
            icon: LiaNotesMedicalSolid,
            name: "Medical File",
        },
        {
            key: 5,
            url: "/patient/chatbox",
            icon: HiChatAlt2,
            name: "ChatBox",
        },

        {
            key: 6,
            url: "/patient/invoices",
            icon: LiaFileInvoiceDollarSolid,
            name: "Invoices",
        },

        {
            key: 7,
            url: "/patient/settings",
            icon: MdOutlineSettings,
            name: "Settings",
        },
    ];

    const hospitalList = [
        // {
        //     key: 1,
        //     url: "/hospital/dashboard",
        //     icon: MdSpaceDashboard,
        //     name: "Dashboard",
        // },

        {
            key: 2,
            url: "/hospital/addpatient",
            icon: FaHandHoldingMedical,
            name: "Add Patient",
        },

        {
            key: 9,
            url: "/hospital/adddoctor",
            icon: FaUserDoctor,
            name: "Add Doctor",
        },

        {
            key: 5,
            url: "/hospital/chatbox",
            icon: HiChatAlt2,
            name: "ChatBox",
        },

        {
            key: 4,
            url: "/hospital/addform",
            icon: LiaWpforms,
            name: "Add Form",
        },

        {
            key: 6,
            url: "/hospital/invoices",
            icon: LiaFileInvoiceDollarSolid,
            name: "Invoices",
        },

        {
            key: 7,
            url: "/hospital/settings",
            icon: MdOutlineSettings,
            name: "Settings",
        },
    ];

    const doctorList = [
        // {
        //     key: 1,
        //     url: "/ambulance/dashboard",
        //     icon: MdSpaceDashboard,
        //     name: "Dashboard",
        // },

        {
            key: 2,
            url: "/doctor/addpatient",
            icon: FaHandHoldingMedical,
            name: "Add Patient",
        },

        {
            key: 5,
            url: "/doctor/chatbox",
            icon: HiChatAlt2,
            name: "ChatBox",
        },

        // {
        //     key: 6,
        //     url: "/doctor/invoices",
        //     icon: LiaFileInvoiceDollarSolid,
        //     name: "Invoices",
        // },

        {
            key: 7,
            url: "/doctor/settings",
            icon: MdOutlineSettings,
            name: "Settings",
        },
    ];

    const ambulanceList = [
        // {
        //     key: 1,
        //     url: "/ambulance/dashboard",
        //     icon: MdSpaceDashboard,
        //     name: "Dashboard",
        // },

        {
            key: 2,
            url: "/ambulance/addpatient",
            icon: FaHandHoldingMedical,
            name: "Add Patient",
        },

        {
            key: 5,
            url: "/ambulance/chatbox",
            icon: HiChatAlt2,
            name: "ChatBox",
        },

        // {
        //     key: 6,
        //     url: "/ambulance/invoices",
        //     icon: LiaFileInvoiceDollarSolid,
        //     name: "Invoices",
        // },

        {
            key: 7,
            url: "/ambulance/settings",
            icon: MdOutlineSettings,
            name: "Settings",
        },
    ];

    return (
        <div className="h-full w-60 fixed top-0 left-0 px-3 py-10 overflow-auto HIDE_SCROLLBAR">
            {/* Logo */}
            <div className="h-auto w-full flex justify-center items-center mb-10 ">
                <h1 className="text-3xl text-blue_color">Medi Ai</h1>
            </div>

            <div className="mt-10 w-full flex flex-col justify-center items-center gap-5">
                {/* All Links */}
                {user?.role === "patient" &&
                    paitentList?.map((item) => (
                        <Link
                            to={item.url}
                            key={item.key}
                            className={` flex p-2 gap-2 rounded-full justify-center w-full duration-200 items-center font-semibold text-lg text-blue_color  hover:bg-sky_color    ${
                                pathname === item.url
                                    ? "bg-blue_color text-white hover:!bg-blue_color "
                                    : ""
                            }`}
                        >
                            <item.icon className="text-xl w-1/5" />
                            <p className="w-3/5">{item.name}</p>
                        </Link>
                    ))}

                {user?.role === "hospital" &&
                    hospitalList?.map((item) => (
                        <Link
                            to={item.url}
                            key={item.key}
                            className={` flex p-2 gap-2 rounded-full justify-center w-full  items-center font-semibold text-lg text-blue_color duration-200 hover:bg-sky_color   ${
                                pathname === item.url
                                    ? "bg-blue_color text-white  hover:!bg-blue_color"
                                    : " "
                            }`}
                        >
                            <item.icon className="text-2xl w-1/5" />
                            <p className="w-3/5">{item.name}</p>
                        </Link>
                    ))}

                {user?.role === "doctor" &&
                    doctorList?.map((item) => (
                        <Link
                            to={item.url}
                            key={item.key}
                            className={` flex p-2 gap-2 rounded-full justify-center w-full items-center font-semibold text-lg text-blue_color duration-200 hover:bg-sky_color  ${
                                pathname === item.url
                                    ? "bg-blue_color text-white hover:!bg-blue_color "
                                    : ""
                            }`}
                        >
                            <item.icon className="text-2xl w-1/5" />
                            <p className="w-3/5">{item.name}</p>
                        </Link>
                    ))}

                {user?.role === "ambulance" &&
                    ambulanceList?.map((item) => (
                        <Link
                            to={item.url}
                            key={item.key}
                            className={` flex p-2 gap-2 rounded-full justify-center w-full items-center font-semibold text-lg text-blue_color duration-200 hover:bg-sky_color  ${
                                pathname === item.url
                                    ? "bg-blue_color text-white hover:!bg-blue_color "
                                    : ""
                            }`}
                        >
                            <item.icon className="text-2xl w-1/5" />
                            <p className="w-3/5">{item.name}</p>
                        </Link>
                    ))}
                <button
                    onClick={() => console.log("Logout")}
                    className="flex p-2 gap-2 justify-center w-full items-center font-semibold text-lg hover:bg-red-400 hover:text-white duration-200 text-red-700 rounded-md"
                >
                    <RxExit className="text-xl w-1/5" />

                    <p className="w-3/5 text-left">Logout</p>
                </button>
            </div>
        </div>
    );
};

export default DashboardSidebar;
