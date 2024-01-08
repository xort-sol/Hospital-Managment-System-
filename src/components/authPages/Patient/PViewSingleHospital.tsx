import { FC } from "react";

// import { useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import PHospitalMap from "./PatientDBComponents/PHospital/PHospitalMap";

type Props = {};

const PViewSingleHospital: FC<Props> = () => {
    // const { hospitalId } = useParams();

    // Will add useEffect

    const hospitalDetails = {
        key: 1,
        name: "The Royal London Hospital",
        location: "Whitechapel Road, Whitechapel, London, England",
        distance: "1.2 km",
        phoneNumber: "+12 545 455 45666",
        hospitalImage:
            "https://whitechapellondon.co.uk/wp-content/uploads/sites/5/2023/06/Royal-London-Whitechapel-4.jpg",
        chatbox: "#",
        bestKnownFor: [
            {
                title: "Lorem ipsum dolor sit amet, consectetur adi elit, sed do eiusmod",
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adi elit, sed do eiusmod",
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adi elit, sed do eiusmod",
            },
        ],
    };

    return (
        <div className=" w-full h-full ">
            <div className="w-full h-full flex flex-col justify-center items-center gap-8 p-5">
                {/* img and data */}

                <div className="w-full h-full flex justify-center items-start gap-5">
                    {/* img */}
                    <div className="w-1/3 h-full bg-red-500 rounded-md overflow-hidden">
                        <img
                            src={hospitalDetails.hospitalImage}
                            alt={hospitalDetails.name}
                            className="w-[24rem] h-[18rem] object-cover"
                        />
                    </div>

                    {/* data */}
                    <div className="w-2/3 flex flex-col gap-5 justify-start items-start">
                        <h1 className="font-bold text-3xl text-blue_color mb-3">
                            {hospitalDetails.name}
                        </h1>

                        <div className=" w-full flex  justify-start gap-10 items-center">
                            <div className="px-5 py-2 font-semibold w-1/2 h-14 bg-white rounded-md flex justify-start items-center gap-4 text-blue_color">
                                <CiLocationOn className="text-4xl" />

                                <p className="text-sm line-clamp-2">
                                    {hospitalDetails.location}
                                </p>
                            </div>

                            <div className="px-5 py-2 w-auto h-14 bg-white rounded-md flex justify-start items-center gap-4 text-blue_color">
                                <GiRotaryPhone className="text-2xl" />

                                <p className="text-sm">
                                    {hospitalDetails.phoneNumber}
                                </p>
                            </div>
                        </div>

                        {/* best know=n for */}
                        <div className="flex flex-col mt-5 justify-start gap-2 items-start w-full text-blue_color">
                            <p className="text-2xl font-normal ">
                                Best Known For :{" "}
                            </p>

                            <ul className="list-disc px-5 py-2">
                                {hospitalDetails.bestKnownFor.map(
                                    (item, index) => (
                                        <li className="list-disc" key={index}>
                                            {item.title}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Map */}

                <div className="w-full h-full flex flex-col gap-5 justify-center items-center p-3">
                    <p className="w-full text-left text-blue_color text-xl">
                        Location
                    </p>
                    <PHospitalMap hospitalDetails={hospitalDetails} />
                </div>
            </div>
        </div>
    );
};

export default PViewSingleHospital;
