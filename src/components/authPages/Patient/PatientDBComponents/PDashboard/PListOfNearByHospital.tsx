import { FC } from "react";
import { Link } from "react-router-dom";

import { GiPathDistance } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { IoMdChatbubbles } from "react-icons/io";

type Props = {};

const hospitalData = [
    {
        key: 1,
        name: "The Royal London Hospital",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://whitechapellondon.co.uk/wp-content/uploads/sites/5/2023/06/Royal-London-Whitechapel-4.jpg",
        chatbox: "#",
    },
    {
        key: 2,
        name: "The Royal London Hospital",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://whitechapellondon.co.uk/wp-content/uploads/sites/5/2023/06/Royal-London-Whitechapel-4.jpg",
        chatbox: "#",
    },
    {
        key: 3,
        name: "The Royal London Hospital",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://whitechapellondon.co.uk/wp-content/uploads/sites/5/2023/06/Royal-London-Whitechapel-4.jpg",
        chatbox: "#",
    },
    {
        key: 4,
        name: "The Royal London Hospital",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://whitechapellondon.co.uk/wp-content/uploads/sites/5/2023/06/Royal-London-Whitechapel-4.jpg",
        chatbox: "#",
    },

    {
        key: 5,
        name: "The Royal London Hospital",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://whitechapellondon.co.uk/wp-content/uploads/sites/5/2023/06/Royal-London-Whitechapel-4.jpg",
        chatbox: "#",
    },
    {
        key: 6,
        name: "The Royal London Hospital",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        hospitalImage:
            "https://whitechapellondon.co.uk/wp-content/uploads/sites/5/2023/06/Royal-London-Whitechapel-4.jpg",
        chatbox: "#",
    },
];

const PListOfNearByHospital: FC<Props> = () => {
    return (
        <div className="my-10 w-full h-full flex flex-col gap-5">
            <div className="flex w-full justify-between items-center">
                <p className="text-xl font-semibold">
                    List Of Nearby Hospitals
                </p>

                <Link
                    to="/patient/hospitals"
                    className="text-sky-600 hover:text-sky-800"
                >
                    See All
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {hospitalData?.map((hospital, index) => (
                    <Link
                        to={`/patient/hospitals/${hospital.key}`}
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

                        <button
                            // to={hospital.chatbox}
                            className=" h-full w-1/6 flex justify-center items-center p-1 text-blue_color hover:text-blue_color_dark"
                        >
                            <IoMdChatbubbles className="text-3xl " />
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PListOfNearByHospital;
