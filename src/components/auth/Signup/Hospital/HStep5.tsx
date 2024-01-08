import { ReusableButton, ReusableInputField } from "../../../utils/Components";
import {
    signupDecrement,
    signupIncrement,
} from "../../../../redux/features/signup/signupSlice";
import { useDispatch } from "react-redux";
import { FC } from "react";

type Props = {
    setHospitalData: any;
    workingHours: any;
};

const HStep5: FC<Props> = ({ setHospitalData, workingHours }) => {
    const dispatch = useDispatch();

    const handleDayToggle = (dayIndex: number) => {
        const updatedWorkingHours = [...workingHours]; // Create a copy of the workingHours array
        updatedWorkingHours[dayIndex].isOpen =
            !updatedWorkingHours[dayIndex].isOpen; // Toggle the isOpen value

        setHospitalData({
            workingHours: updatedWorkingHours,
        });
    };

    const handleTimeChange = (
        dayIndex: number,
        field: string,
        value: string
    ) => {
        setHospitalData((prevData: any) => {
            const updatedWorkingHours = [...prevData.workingHours];
            updatedWorkingHours[dayIndex][field] = value;
            return {
                ...prevData,
                workingHours: updatedWorkingHours,
            };
        });
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
                    {/* WorkingHours comes here */}
                    {workingHours.map((dayData: any, dayIndex: number) => (
                        <div
                            key={dayData.day}
                            className="flex items-center justify-between"
                        >
                            <div className="w-2/6 text-lg font-bold">
                                {dayData.day}
                            </div>
                            <div className="w-2/6">
                                <label>
                                    <input
                                        className={`mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem]  before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] ${
                                            dayData.isOpen
                                                ? "bg-[#71D99B]"
                                                : "bg-neutral-300"
                                        } `}
                                        type="checkbox"
                                        checked={dayData.isOpen}
                                        onChange={() =>
                                            handleDayToggle(dayIndex)
                                        }
                                    />
                                    Open
                                </label>
                            </div>
                            <div className="w-2/6 flex justify-center items-center gap-5">
                                <ReusableInputField
                                    type="time"
                                    id={`openTime-${dayIndex}`}
                                    htmlfor="openTime"
                                    label=""
                                    value={dayData.openTime}
                                    onChange={(e: any) =>
                                        handleTimeChange(
                                            dayIndex,
                                            "openTime",
                                            e.target.value
                                        )
                                    }
                                    customeStyle="py-1 px-2"
                                    parentDivStyle="w-full"
                                />
                                <p>To</p>
                                <ReusableInputField
                                    type="time"
                                    htmlfor="closeTime"
                                    label=""
                                    value={dayData.closeTime}
                                    onChange={(e: any) =>
                                        handleTimeChange(
                                            dayIndex,
                                            "closeTime",
                                            e.target.value
                                        )
                                    }
                                    customeStyle="py-1 px-2"
                                    parentDivStyle="w-full"
                                />
                            </div>
                        </div>
                    ))}
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

export default HStep5;
