import {
    ReusableButton,
    ReusableInputField,
    ReusableSelectField,
} from "../../../utils/Components";
import {
    signupDecrement,
    signupIncrement,
} from "../../../../redux/features/signup/signupSlice";
import { useDispatch } from "react-redux";
import { FC } from "react";

type Props = {
    setHospitalData: any;
    generalInfo: any;
};

const HStep3: FC<Props> = ({ generalInfo, setHospitalData }) => {
    const dispatch = useDispatch();

    const handlegeneralInfoChange = (key: string, value: any) => {
        setHospitalData((prevData: any) => ({
            ...prevData,
            generalInfo: {
                ...prevData.generalInfo,
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
                    <ReusableInputField
                        htmlfor="name"
                        label="Name"
                        required={true}
                        type="text"
                        value={generalInfo.name}
                        onChange={(e: any) =>
                            handlegeneralInfoChange("name", e.target.value)
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableInputField
                        htmlfor="phoneNumber"
                        label="Phone Number"
                        required={true}
                        type="tel"
                        value={generalInfo.phoneNumber}
                        onChange={(e: any) =>
                            handlegeneralInfoChange(
                                "phoneNumber",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableSelectField
                        htmlfor="location"
                        label="Location"
                        required={true}
                        options={[
                            { value: "usa", label: "USA" },
                            { value: "uk", label: "UK" },
                        ]}
                        value={generalInfo.location}
                        onChange={(e: any) =>
                            handlegeneralInfoChange("location", e.target.value)
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableInputField
                        htmlfor="email"
                        label="Email"
                        required={true}
                        type="text"
                        value={generalInfo.email}
                        onChange={(e: any) =>
                            handlegeneralInfoChange("email", e.target.value)
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
                        value={generalInfo.country}
                        onChange={(e: any) =>
                            handlegeneralInfoChange("country", e.target.value)
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableSelectField
                        htmlfor="address"
                        label="Address"
                        required={true}
                        options={[
                            { value: "usa", label: "USA" },
                            { value: "uk", label: "UK" },
                        ]}
                        value={generalInfo.address}
                        onChange={(e: any) =>
                            handlegeneralInfoChange("address", e.target.value)
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <div className="flex w-full justify-between items-center ">
                        <ReusableInputField
                            htmlfor="city"
                            label="City"
                            required={true}
                            value={generalInfo.city}
                            onChange={(e: any) =>
                                handlegeneralInfoChange("city", e.target.value)
                            }
                            customeStyle="py-2 px-4 "
                            parentDivStyle="w-1/3"
                        />

                        <ReusableInputField
                            htmlfor="postalCode"
                            label="Postal Code"
                            required={true}
                            value={generalInfo.postalCode}
                            onChange={(e: any) =>
                                handlegeneralInfoChange(
                                    "postalCode",
                                    e.target.value
                                )
                            }
                            customeStyle="py-2 px-4 "
                            parentDivStyle="w-1/3"
                        />
                    </div>

                    <ReusableSelectField
                        htmlfor="currency"
                        label="Currency"
                        required={true}
                        options={[
                            { value: "usa", label: "USA" },
                            { value: "uk", label: "UK" },
                        ]}
                        value={generalInfo.currency}
                        onChange={(e: any) =>
                            handlegeneralInfoChange("currency", e.target.value)
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableInputField
                        htmlfor="websiteUrl"
                        label="Website Url"
                        required={true}
                        type="text"
                        value={generalInfo.websiteUrl}
                        onChange={(e: any) =>
                            handlegeneralInfoChange(
                                "websiteUrl",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />
                </div>

                {/* Buttons */}
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

export default HStep3;
