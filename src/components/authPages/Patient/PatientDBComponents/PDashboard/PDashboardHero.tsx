import { FC } from "react";

import r1 from "../../../../../assets/dashboardIcons/p/r1.png";

// image
import f1 from "../../../../../assets/dashboardIcons/p/f1.png";
import s1 from "../../../../../assets/dashboardIcons/p/s1.png";
import h1 from "../../../../../assets/dashboardIcons/p/h1.png";
import a1 from "../../../../../assets/dashboardIcons/p/a1.png";
import { useDispatch } from "react-redux";
import {
    showAllowFileAccessModal,
    showAmbulanceModal,
} from "../../../../../redux/features/patient/patientSlice";

type Props = {};

const PDashboardHero: FC<Props> = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-full h-full flex flex-col gap-10 mb-10 justify-center items-center ">
            <div className="p-5 w-11/12 h-full">
                <div className="bg-blue_color p-2 rounded-2xl h-32 text-white flex justify-between items-center">
                    <div className="flex flex-col gap-3 p-3">
                        <h2 className="text-2xl font-semibold">
                            Do you have any symptoms ?
                        </h2>

                        <p className="text-sm max-w-xl">
                            Introducing our interactive symptom assessment and
                            questioning feature, which leverages AI technology
                            to enhance the information -gathering process.
                        </p>
                    </div>

                    <img
                        src={r1}
                        alt="robot"
                        className="h-44 w-auto object-cover"
                    />
                </div>
            </div>

            <div className="w-full h-full flex flex-wrap justify-between items-center text-[#fff]">
                {/* Country */}
                <div className="p-2 w-40 h-36 rounded-2xl cursor-pointer bg-slate-700 flex flex-col gap-2 justify-center items-center">
                    <img
                        src={f1}
                        alt="country"
                        className="h-20 w-auto object-cover"
                    />
                    <p>Country</p>
                </div>

                {/* Case */}
                <div className="p-2 w-40 h-36 rounded-2xl cursor-pointer flex flex-col gap-2 justify-center items-center bg-gradient-to-br from-sky-400 to-sky-600">
                    <img
                        src={s1}
                        alt="case"
                        className="h-20 w-auto object-cover"
                    />
                    <p>Cases</p>
                </div>

                {/* Hospital */}
                <div
                    className="p-2 w-40 h-36 rounded-2xl cursor-pointer  flex flex-col gap-2 justify-center items-center bg-gradient-to-br from-cyan-400 to-cyan-600"
                    onClick={() => dispatch(showAllowFileAccessModal())}
                >
                    <img
                        src={h1}
                        alt="hospital"
                        className="h-20 w-auto object-cover"
                    />
                    <p>Hospital</p>
                </div>

                {/* Ambulance */}
                <div
                    className="p-2 w-40 h-36 rounded-2xl cursor-pointer  flex flex-col gap-2 justify-center items-center bg-slate-700 "
                    onClick={() => dispatch(showAmbulanceModal())}
                >
                    <img
                        src={a1}
                        alt="ambulance"
                        className="h-20 w-auto object-cover"
                    />
                    <p>Ambulance</p>
                </div>
            </div>
        </div>
    );
};

export default PDashboardHero;
