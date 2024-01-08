import { FC } from "react";
import { useDispatch } from "react-redux";
import { hideAmbulanceModal } from "../../../../../redux/features/patient/patientSlice";
import t1 from "../../../../../assets/dashboardIcons/p/t1.png";
import { ReusableButton } from "../../../../utils/Components";

type Props = {};

const PAmbulanceModal: FC<Props> = () => {
    const dispatch = useDispatch();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70">
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-4">
                {/* Add modal content here */}

                <img src={t1} alt="time" className="h-20 w-auto object-cover" />

                <h2 className="text-xl font-semibold max-w-[250px] text-center text-blue_color">
                    The ambulance will be here in{" "}
                    <span className="text-[#46A4D5]">6 min</span>
                </h2>

                <ReusableButton
                    label="Close"
                    customeStyle=" bg-gray_color text-white hover:bg-slate-900 duration-200"
                    onClick={() => dispatch(hideAmbulanceModal())}
                />
            </div>
        </div>
    );
};

export default PAmbulanceModal;
