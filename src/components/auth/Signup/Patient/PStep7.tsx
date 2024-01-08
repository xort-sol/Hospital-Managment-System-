import React from "react";
import { useDispatch } from "react-redux";
import {
    signupDecrement,
    signupIncrement,
} from "../../../../redux/features/signup/signupSlice";
import { ReusableButton, ReusableInputField } from "../../../utils/Components";
import { toast } from "react-toastify";

type Props = {
    emergencyContacts: any;
    setPatientData: any;
};

const PStep7: React.FC<Props> = ({ emergencyContacts, setPatientData }) => {
    const dispatch = useDispatch();

    const handleNextClick = () => {
        // If you have validation logic, you can perform it here before proceeding
        // For example, check if required fields are filled.
        if (
            emergencyContacts[emergencyContacts.length - 1]
                ?.nameOfEmergencyContact !== "" &&
            emergencyContacts[emergencyContacts.length - 1]?.phoneNumber !==
                "" &&
            emergencyContacts[emergencyContacts.length - 1]?.relationship !== ""
        ) {
            dispatch(signupIncrement());
        } else {
            toast.error(
                "Please fill all fields for the last emergency contact entry."
            );
        }
    };

    const handleBackClick = () => {
        dispatch(signupDecrement());
    };

    const addEmergencyContact = () => {
        setPatientData((prevData: any) => ({
            ...prevData,
            emergencyContacts: [
                ...prevData.emergencyContacts,
                {
                    nameOfEmergencyContact: "",
                    phoneNumber: "",
                    relationship: "",
                },
            ],
        }));
    };

    const updateEmergencyContact = (
        index: number,
        field: string,
        value: string
    ) => {
        setPatientData((prevData: any) => {
            const updatedContacts = [...prevData.emergencyContacts];
            updatedContacts[index][field] = value;
            return {
                ...prevData,
                emergencyContacts: updatedContacts,
            };
        });
    };

    const deleteEmergencyContact = (index: number) => {
        if (emergencyContacts.length > 1) {
            setPatientData((prevData: any) => {
                const updatedContacts = [...prevData.emergencyContacts];
                updatedContacts.splice(index, 1);
                return {
                    ...prevData,
                    emergencyContacts: updatedContacts,
                };
            });
        } else {
            toast.error("You must have at least one emergency contact entry.");
        }
    };

    console.log(emergencyContacts);

    return (
        <div className="h-full w-full">
            <div className="flex flex-col items-center justify-center h-full w-full">
                {emergencyContacts.map((contact: any, index: number) => (
                    <div
                        key={index}
                        className="flex flex-col w-2/3 justify-between gap-5 items-center"
                    >
                        <ReusableInputField
                            htmlfor={`nameOfEmergencyContact_${index}`}
                            label="Name of Emergency Contact"
                            required={true}
                            value={contact.nameOfEmergencyContact}
                            customeStyle="py-2 px-4"
                            parentDivStyle="w-full"
                            onChange={(e: any) =>
                                updateEmergencyContact(
                                    index,
                                    "nameOfEmergencyContact",
                                    e.target.value
                                )
                            }
                        />

                        <ReusableInputField
                            htmlfor={`phoneNumber_${index}`}
                            label="Phone Number"
                            required={true}
                            value={contact.phoneNumber}
                            customeStyle="py-2 px-4"
                            parentDivStyle="w-full"
                            onChange={(e: any) =>
                                updateEmergencyContact(
                                    index,
                                    "phoneNumber",
                                    e.target.value
                                )
                            }
                        />

                        <ReusableInputField
                            htmlfor={`relationship_${index}`}
                            label="Relationship"
                            required={true}
                            value={contact.relationship}
                            customeStyle="py-2 px-4"
                            parentDivStyle="w-full"
                            onChange={(e: any) =>
                                updateEmergencyContact(
                                    index,
                                    "relationship",
                                    e.target.value
                                )
                            }
                        />

                        <ReusableInputField
                            htmlfor={`email_${index}`}
                            label="Email"
                            type="email"
                            required={true}
                            value={contact.email}
                            customeStyle="py-2 px-4"
                            parentDivStyle="w-full"
                            onChange={(e: any) =>
                                updateEmergencyContact(
                                    index,
                                    "email",
                                    e.target.value
                                )
                            }
                        />

                        <ReusableInputField
                            htmlfor={`mediaiId${index}`}
                            label="MediAi Id"
                            required={true}
                            value={contact.mediaiId}
                            customeStyle="py-2 px-4"
                            parentDivStyle="w-full"
                            onChange={(e: any) =>
                                updateEmergencyContact(
                                    index,
                                    "mediaiId",
                                    e.target.value
                                )
                            }
                        />

                        {emergencyContacts.length > 1 && (
                            <ReusableButton
                                label="Delete"
                                customeStyle="bg-red-400 my-5 text-white hover:bg-red-600 duration-200"
                                onClick={() => deleteEmergencyContact(index)}
                            />
                        )}
                    </div>
                ))}

                <div className="w-2/3 my-5">
                    <button
                        className="w-auto  text-sky-400 text-lg"
                        onClick={addEmergencyContact}
                    >
                        +Add More
                    </button>
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

export default PStep7;
