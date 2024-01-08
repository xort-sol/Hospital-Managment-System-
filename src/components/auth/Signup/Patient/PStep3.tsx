import { useDispatch } from "react-redux";
import axios from 'axios';
import {
    ReusableButton,
    ReusableInputField,
    ReusableSelectField,
} from "../../../utils/Components";
import {
    signupDecrement,
    signupIncrement,
} from "../../../../redux/features/signup/signupSlice";
import { FC } from "react";

// will Add npm i react-country-region-selector for country select

type Props = {
    personalDetails: any;
    setPatientData: any;
};

const PStep3: FC<Props> = ({ personalDetails, setPatientData }) => {
    const dispatch = useDispatch();

    // console.log(personalDetails);

    const handlePersonalDetailsChange = (key: string, value: any) => {
        setPatientData((prevData: any) => ({
            ...prevData,
            personalDetails: {
                ...prevData.personalDetails,
                [key]: value,
            },
        }));
    };
    const handleNextClick = () => {
        // No need for axios here, just update the patientData state
        dispatch(signupIncrement());
    };

    const handleBackClick = () => {
        dispatch(signupDecrement());
    };

    return (
        <div className="h-full w-full">
            <div className="flex flex-col items-center justify-center h-full w-full ">
                <div className="flex w-2/3 justify-between items-center ">
                    <ReusableInputField
                        htmlfor="firstname"
                        label="First Name"
                        required={true}
                        value={personalDetails.firstName}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "firstName",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4 "
                        parentDivStyle="w-1/3"
                    />

                    <ReusableInputField
                        htmlfor="lastname"
                        label="Last Name"
                        required={true}
                        value={personalDetails.lastName}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "lastName",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4 "
                        parentDivStyle="w-1/3"
                    />
                </div>

                <div className="flex flex-col gap-6 w-2/3 my-5">
                    <ReusableInputField
                        htmlfor="dateofbirth"
                        label="Date of Birth"
                        required={true}
                        type="date"
                        value={personalDetails.dateOfBirth}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "dateOfBirth",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableSelectField
                        htmlfor="gender"
                        label="Gender"
                        required={true}
                        options={[
                            { value: "Male", label: "Male" },
                            { value: "Female", label: "Female" },
                        ]}
                        value={personalDetails.gender}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "gender",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />
                    <ReusableSelectField
                        htmlfor="bloodType"
                        label="What is your blood type?"
                        required={true}
                        options={[
                            { value: "a", label: "A" },
                            { value: "b", label: "B" },
                            { value: "o", label: "O" },
                            { value: "ab+", label: "AB+" },
                            { value: "ab-", label: "AB-" },
                            { value: "notsure", label: "I'm not sure." },
                        ]}
                        value={personalDetails.bloodType}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "bloodType",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableInputField
                        htmlfor="height"
                        label="What is your current height? (in cm)"
                        required={true}
                        type="text"
                        value={personalDetails.height}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "height",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableInputField
                        htmlfor="weight"
                        label="What is your current weight? (in kg)"
                        required={true}
                        type="text"
                        value={personalDetails.weight}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "weight",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableSelectField
                        htmlfor="country"
                        label="Country"
                        required={true}
                        options={[
                            { value: "usa", label: "USA" },
                            { value: "uk", label: "UK" },
                        ]}
                        value={personalDetails.country}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "country",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableInputField
                        htmlfor="address"
                        label="Address"
                        required={true}
                        type="text"
                        value={personalDetails.address}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "address",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />
                </div>

                <div className="flex w-2/3 justify-between items-center my-5">
                    <ReusableInputField
                        htmlfor="city"
                        label="City Name"
                        required={true}
                        value={personalDetails.city}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange("city", e.target.value)
                        }
                        customeStyle="py-2 px-4 "
                        parentDivStyle="w-1/3"
                    />

                    <ReusableInputField
                        htmlfor="postalCode"
                        label="Postal Code"
                        required={true}
                        value={personalDetails.postalCode}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "postalCode",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4 "
                        parentDivStyle="w-1/3"
                    />
                </div>

                <div className="flex flex-col gap-6 w-2/3 my-5">
                    <ReusableInputField
                        htmlfor="passportNumber"
                        label="Passport Number"
                        required={true}
                        type="number"
                        value={personalDetails.passportNumber}
                        onChange={(e: any) =>
                            handlePersonalDetailsChange(
                                "passportNumber",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />
                </div>

                {/* button */}
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

export default PStep3;
