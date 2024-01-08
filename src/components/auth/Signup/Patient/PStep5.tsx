// type Props = {}

import { useDispatch } from "react-redux";
import {
    signupDecrement,
    signupIncrement,
} from "../../../../redux/features/signup/signupSlice";
import { ReusableButton, ReusableSelectField } from "../../../utils/Components";
import { FC, useState } from "react";
import {
    MedicalConditionSelectFieldOptions,
    MedicationSelectFieldOptions,
    MedicationType,
    SicknessHistoryType,
    SurgicalHistorySelectFieldOptions,
} from "../utils/SelectFieldOptions";
import { BsPlusCircle } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

type Props = {
    medicalHistory: any;
    setPatientData: any;
};

const PStep5: FC<Props> = ({ medicalHistory, setPatientData }) => {
    const dispatch = useDispatch();

    const [newMedication, setNewMedication] = useState("");

    const handleAddMedication = () => {
        if (newMedication.trim() !== "") {
            setPatientData((prevData: any) => ({
                ...prevData,
                medicalHistory: {
                    ...prevData.medicalHistory,
                    customInputMedications: [
                        ...prevData.medicalHistory.customInputMedications,
                        newMedication,
                    ],
                },
            }));
            setNewMedication(""); // Clear the input field after adding medication
        } else {
            return toast.error("Please enter a valid Medication");
        }
    };

    const handleDeleteMedication = (index: number) => {
        setPatientData((prevData: any) => ({
            ...prevData,
            medicalHistory: {
                ...prevData.medicalHistory,
                customInputMedications: [
                    ...prevData.medicalHistory.customInputMedications.slice(
                        0,
                        index
                    ),
                    ...prevData.medicalHistory.customInputMedications.slice(
                        index + 1
                    ),
                ],
            },
        }));
    };

    const handleInputChange = (e: any) => {
        setNewMedication(e.target.value);
    };

    const handlemedicalHistoryChange = (key: string, value: any) => {
        setPatientData((prevData: any) => ({
            ...prevData,
            medicalHistory: {
                ...prevData.medicalHistory,
                [key]: value,
            },
        }));
    };

    const handleMedicationTypesChange = (type: string) => {
        setPatientData((prevData: any) => ({
            ...prevData,
            medicalHistory: {
                ...prevData.medicalHistory,
                medicationTypes:
                    prevData.medicalHistory.medicationTypes.includes(type)
                        ? prevData.medicalHistory.medicationTypes.filter(
                              (medType: string) => medType !== type
                          )
                        : [...prevData.medicalHistory.medicationTypes, type],
            },
        }));
    };

    const handleSicknessHistoryChange = (condition: string) => {
        setPatientData((prevData: any) => {
            const updatedSicknessHistory = [
                ...prevData.medicalHistory.sicknessHistory,
            ];

            // Toggle the presence of the condition in the array
            const conditionIndex = updatedSicknessHistory.indexOf(condition);
            if (conditionIndex !== -1) {
                updatedSicknessHistory.splice(conditionIndex, 1); // Remove the condition
            } else {
                updatedSicknessHistory.push(condition); // Add the condition
            }

            return {
                ...prevData,
                medicalHistory: {
                    ...prevData.medicalHistory,
                    sicknessHistory: updatedSicknessHistory,
                },
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

    console.log(medicalHistory);

    return (
        <div className="h-full w-full">
            <div className="flex flex-col items-center justify-center h-full w-full ">
                <div className="flex flex-col gap-6 w-2/3 my-5">
                    <ReusableSelectField
                        htmlfor="medicalCondition"
                        label="What is your current medical condition?"
                        required={true}
                        options={MedicalConditionSelectFieldOptions}
                        value={medicalHistory.medicalCondition}
                        onChange={(e: any) =>
                            handlemedicalHistoryChange(
                                "medicalCondition",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <div className="w-full flex flex-col gap-5">
                        <h1 className="text-xl font-semibold">
                            Please indicate if you have ever been diagnosed with
                            any of the following conditions:
                        </h1>
                        <div className="flex flex-wrap w-full gap-5 my-5">
                            {SicknessHistoryType.map((condition) => (
                                <div
                                    key={condition.value}
                                    className=" flex gap-5 items-center justify-center px-5 py-2  border-r"
                                >
                                    <input
                                        type="checkbox"
                                        checked={medicalHistory.sicknessHistory.includes(
                                            condition.value
                                        )}
                                        onChange={() =>
                                            handleSicknessHistoryChange(
                                                condition.value
                                            )
                                        }
                                        className="cursor-pointer"
                                    />
                                    <label>{condition.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ReusableSelectField
                        htmlfor="surgicalHistory"
                        label="What is your surgical history?"
                        required={true}
                        options={SurgicalHistorySelectFieldOptions}
                        value={medicalHistory.surgicalHistory}
                        onChange={(e: any) =>
                            handlemedicalHistoryChange(
                                "surgicalHistory",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableSelectField
                        htmlfor="allergy"
                        label="Allergy"
                        required={false}
                        options={[
                            { value: "allergy1", label: "allergy1" },
                            { value: "allergy2", label: "allergy2" },
                        ]}
                        value={medicalHistory.allergy}
                        onChange={(e: any) =>
                            handlemedicalHistoryChange(
                                "allergy",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableSelectField
                        htmlfor="medication"
                        label="Are you under any medication?"
                        required={true}
                        options={MedicationSelectFieldOptions}
                        value={medicalHistory.medication}
                        onChange={(e: any) =>
                            handlemedicalHistoryChange(
                                "medication",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    {medicalHistory?.medication &&
                        medicalHistory.medication !== "notonmedication" && (
                            <div className="w-full flex flex-col gap-5 my-4">
                                {MedicationType?.map((item) => (
                                    <div
                                        key={item.value}
                                        className="w-full flex justify-between items-center gap-5"
                                    >
                                        <div className="flex flex-col justify-start items-start w-full gap-1">
                                            <h1 className="text-sm font-semibold">
                                                {item.label}
                                            </h1>
                                            <p className="text-xs font-normal">
                                                {item.description}
                                            </p>
                                        </div>

                                        <input
                                            type="checkbox"
                                            id={item.value}
                                            checked={medicalHistory.medicationTypes.includes(
                                                item.value
                                            )}
                                            onChange={() =>
                                                handleMedicationTypesChange(
                                                    item.value
                                                )
                                            }
                                            className="h-4 w-4 cursor-pointer"
                                        />
                                    </div>
                                ))}

                                {/* Custom Input */}

                                <div className="my-5 flex flex-col gap-5 w-full">
                                    <h1 className="text-lg font-semibold">
                                        Input the name of the medication{" "}
                                    </h1>

                                    {medicalHistory.customInputMedications.map(
                                        (medication: any, index: number) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center gap-2"
                                            >
                                                <input
                                                    type="text"
                                                    value={medication}
                                                    readOnly
                                                    className="border rounded-full px-5 py-3 w-5/6 "
                                                />
                                                <button
                                                    onClick={() =>
                                                        handleDeleteMedication(
                                                            index
                                                        )
                                                    }
                                                    className="bg-red-400 rounded-md p-2 text-lg text-white hover:bg-red-600 duration-200"
                                                >
                                                    <MdDeleteForever />
                                                </button>
                                            </div>
                                        )
                                    )}
                                    <div className="flex justify-between items-center gap-2">
                                        <input
                                            type="text"
                                            value={newMedication}
                                            onChange={handleInputChange}
                                            className="border rounded-full px-5 py-3 w-5/6 "
                                        />
                                        <button
                                            onClick={handleAddMedication}
                                            className="bg-green-400 rounded-md p-2 text-lg text-blue_color hover:bg-green-600 duration-200"
                                        >
                                            <BsPlusCircle />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
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

export default PStep5;
