import { FC } from "react";
import { useDispatch } from "react-redux";

import d1 from "../../../../../assets/dashboardIcons/h/d1.png";
import { ReusableButton } from "../../../../utils/Components";
import { closeAddPatientModal } from "../../../../../redux/features/hospital/hospitalSlice";

type Props = {};

const HAddPatientModal: FC<Props> = () => {
    const dispatch = useDispatch();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70">
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-4">
                {/* Add modal content here */}

                <img
                    src={d1}
                    alt="filepicture"
                    className="h-20 w-auto object-cover"
                />

                <h2 className="text-xl  font-semibold max-w-[250px] text-center text-blue_color">
                    Sorry the patient declined the{" "}
                    <span className="text-[#46A4D5]">connection</span> to
                </h2>

                <div className="flex justify-center items-center gap-5">
                    <ReusableButton
                        label="Close"
                        customeStyle=" bg-gray_color text-white hover:bg-slate-900 duration-200"
                        onClick={() => dispatch(closeAddPatientModal())}
                    />

                    <ReusableButton
                        label="Resend"
                        customeStyle=" bg-red-400 text-white hover:bg-red-600 duration-200"
                        onClick={() => dispatch(closeAddPatientModal())}
                    />
                </div>
            </div>
        </div>
    );
};
export default HAddPatientModal;
