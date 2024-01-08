import { FC } from "react";
import { Link } from "react-router-dom";

import { GiPathDistance } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { IoMdChatbubbles } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { RiSoundModuleFill } from "react-icons/ri";

type Props = {};

const ambulanceData = [
    {
        key: 1,
        name: "Ambulance",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://www.totalmobile.co.uk/wp-content/uploads/2022/04/Shift_patterns_for_London_Ambulance.jpeg",
        chatbox: "#",
    },
    {
        key: 2,
        name: "Ambulance",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://www.totalmobile.co.uk/wp-content/uploads/2022/04/Shift_patterns_for_London_Ambulance.jpeg",
        chatbox: "#",
    },
    {
        key: 3,
        name: "Ambulance",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://www.totalmobile.co.uk/wp-content/uploads/2022/04/Shift_patterns_for_London_Ambulance.jpeg",
        chatbox: "#",
    },
    {
        key: 4,
        name: "Ambulance",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://www.totalmobile.co.uk/wp-content/uploads/2022/04/Shift_patterns_for_London_Ambulance.jpeg",
        chatbox: "#",
    },

    {
        key: 5,
        name: "Ambulance",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://www.totalmobile.co.uk/wp-content/uploads/2022/04/Shift_patterns_for_London_Ambulance.jpeg",
        chatbox: "#",
    },
    {
        key: 6,
        name: "Ambulance",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://www.totalmobile.co.uk/wp-content/uploads/2022/04/Shift_patterns_for_London_Ambulance.jpeg",
        chatbox: "#",
    },
];

const PSearchAmbulance: FC<Props> = () => {
    return (
        <div className="my-10 w-full h-full flex flex-col gap-5">
            <div className="flex w-full justify-between items-center gap-5 my-5">
                <div className="w-full flex justify-start items-center px-5 py-1 bg-[#fff] rounded-xl">
                    <BsSearch className="text-xl text-blue_color" />

                    <input
                        type="text"
                        className="py-2 px-4 bg-transparent w-full"
                        placeholder="Search"
                    />
                </div>

                <button className="text-blue_color font-semibold bg-white p-3 rounded-xl hover:text-blue_color_dark duration-200 flex justify-center items-center gap-2">
                    <p>Filter</p>
                    <RiSoundModuleFill className="text-xl" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {ambulanceData?.map((hospital, index) => (
                    <div
                        className="w-full h-28 gap-3 flex justify-between items-center bg-white rounded-2xl overflow-hidden"
                        key={index}
                    >
                        <img
                            src={hospital?.hospitalImage}
                            alt={hospital?.name}
                            className="h-full w-2/6 object-cover"
                        />

                        <div className="w-3/6 flex flex-col gap-3 p-2">
                            <p className="font-semibold">{hospital.name}</p>
                            <p className="text-xs text-slate-600 flex items-center gap-2 line-clamp-2">
                                <GrLocation className="text-xl" />{" "}
                                {hospital?.location}
                            </p>
                            <p className="text-xs text-slate-600 flex items-center gap-2 uppercase">
                                <GiPathDistance className="text-xl" />{" "}
                                {hospital?.distance}
                            </p>
                        </div>

                        <Link
                            to={hospital.chatbox}
                            className=" h-full w-1/6 flex justify-center items-center p-1 text-blue_color hover:text-blue_color_dark"
                        >
                            <IoMdChatbubbles className="text-3xl " />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PSearchAmbulance;
