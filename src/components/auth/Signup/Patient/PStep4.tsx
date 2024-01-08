import { useDispatch } from "react-redux";
import {
    signupDecrement,
    signupIncrement,
} from "../../../../redux/features/signup/signupSlice";
import {
    ReusableButton,
    ReusableInputField,
    ReusableSelectField,
} from "../../../utils/Components";
import { FC } from "react";

type Props = {
    travelDetails: any;
    setPatientData: any;
};

const PStep4: FC<Props> = ({ travelDetails, setPatientData }) => {
    const dispatch = useDispatch();

    const handletravelDetailsChange = (key: string, value: any) => {
        setPatientData((prevData: any) => ({
            ...prevData,
            travelDetails: {
                ...prevData.travelDetails,
                [key]: value,
            },
        }));
    };

    const handleNextClick = () => {
        // if (!accountType || accountType === "") {
        //     return toast.error("Please select an account type");
        // }
        dispatch(signupIncrement());
    };

    const handleBackClick = () => {
        dispatch(signupDecrement());
    };

    return (
        <div className="h-full w-full">
            <div className="flex flex-col items-center justify-center h-full w-full ">
                <div className="flex flex-col gap-6 w-2/3 my-5">
                    <ReusableSelectField
                        htmlfor="travelReason"
                        label="Travel Reason"
                        required={true}
                        options={[
                            { value: "Holiyday", label: "Holyday" },
                            { value: "Work", label: "Work" },
                        ]}
                        value={travelDetails.travelReason}
                        onChange={(e: any) =>
                            handletravelDetailsChange(
                                "travelReason",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableInputField
                        htmlfor="dateOfTravel"
                        label="Date of Travel"
                        required={true}
                        type="date"
                        value={travelDetails.dateOfTravel}
                        onChange={(e: any) =>
                            handletravelDetailsChange(
                                "dateOfTravel",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableInputField
                        htmlfor="travelLocation"
                        label="Location"
                        required={true}
                        type="text"
                        value={travelDetails.travelLocation}
                        onChange={(e: any) =>
                            handletravelDetailsChange(
                                "travelLocation",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />
                </div>

                <div className="flex w-full justify-center items-center gap-10">
                    <ReusableButton
                        label="Back"
                        onClick={handleBackClick}
                        customeStyle="bg-gray_color text-white my-5"
                    />

                    <ReusableButton
                        label="Next"
                        onClick={handleNextClick}
                        customeStyle="bg-blue_color hover:bg-blue_color_dark duration-200 text-[#fff]"
                    />
                </div>
            </div>
        </div>
    );
};

export default PStep4;
