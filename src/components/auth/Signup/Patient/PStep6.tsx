import { FC } from "react";
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
import { toast } from "react-toastify";

type Props = {
    vaccineHistory: any;
    setPatientData: any;
};

const PStep6: FC<Props> = ({ vaccineHistory, setPatientData }) => {
    const dispatch = useDispatch();

    const handleNextClick = () => {
        // If you have validation logic, you can perform it here before proceeding
        // For example, check if required fields are filled.
        if (
            vaccineHistory.immunizationHistory[
                vaccineHistory.immunizationHistory.length - 1
            ]?.vaccines !== "" &&
            vaccineHistory.immunizationHistory[
                vaccineHistory.immunizationHistory.length - 1
            ]?.dateOfVaccine !== ""
        ) {
            dispatch(signupIncrement());
        } else {
            toast.error(
                "Please add at least one immunization history entry with both 'vaccines' and 'dateOfVaccine' filled."
            );
        }
    };

    const handleBackClick = () => {
        dispatch(signupDecrement());
    };

    // Function to add a new immunization history entry
    const addImmunizationHistoryEntry = () => {
        setPatientData((prevData: any) => ({
            ...prevData,
            vaccineHistory: {
                ...prevData.vaccineHistory,
                immunizationHistory: [
                    ...prevData.vaccineHistory.immunizationHistory,
                    { vaccines: "", dateOfVaccine: "" },
                ],
            },
        }));
    };

    // Function to update a specific immunization history entry
    const updateImmunizationHistoryEntry = (
        index: number,
        field: string,
        value: string
    ) => {
        setPatientData((prevData: any) => {
            const updatedImmunizationHistory = [
                ...prevData.vaccineHistory.immunizationHistory,
            ];
            updatedImmunizationHistory[index][field] = value;
            return {
                ...prevData,
                vaccineHistory: {
                    ...prevData.vaccineHistory,
                    immunizationHistory: updatedImmunizationHistory,
                },
            };
        });
    };

    // Function to delete a specific immunization history entry
    const deleteImmunizationHistoryEntry = (index: number) => {
        if (vaccineHistory.immunizationHistory.length > 1) {
            setPatientData((prevData: any) => {
                const updatedImmunizationHistory = [
                    ...prevData.vaccineHistory.immunizationHistory,
                ];
                updatedImmunizationHistory.splice(index, 1);
                return {
                    ...prevData,
                    vaccineHistory: {
                        ...prevData.vaccineHistory,
                        immunizationHistory: updatedImmunizationHistory,
                    },
                };
            });
        } else {
            toast.error(
                "You must have at least one immunization history entry."
            );
        }
    };

    const handleCovidVaccineChange = (value: string) => {
        setPatientData((prevData: any) => {
            let updatedVaccineHistory = {
                ...prevData.vaccineHistory,
                hasReceivedCovidVaccine: value,
            };

            // If the user selects "No," reset the relevant fields
            if (value === "no") {
                updatedVaccineHistory = {
                    ...updatedVaccineHistory,
                    dosesReceived: "",
                    timeSinceLastVaccination: "",
                };
            }

            return {
                ...prevData,
                vaccineHistory: updatedVaccineHistory,
            };
        });
    };

    console.log(vaccineHistory);

    return (
        <div className="h-full w-full">
            <div className=" w-full flex flex-col justify-center items-center gap-5 max-w-[1400px] m-auto">
                <div className="w-2/3 my-5">
                    <ReusableSelectField
                        htmlfor="hasReceivedCovidVaccine"
                        label="Have you received the COVID-19 vaccine?"
                        required={true}
                        options={[
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
                        ]}
                        value={vaccineHistory.hasReceivedCovidVaccine}
                        onChange={(e: any) =>
                            handleCovidVaccineChange(e.target.value)
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    {vaccineHistory.hasReceivedCovidVaccine === "yes" && (
                        <div className="flex flex-col gap-5 my-5">
                            <ReusableSelectField
                                htmlfor="dosesReceived"
                                label="Please specify how many times you've been vaccinated"
                                required={true}
                                options={[
                                    { value: "one", label: "One dose" },
                                    { value: "two", label: "Two doses" },
                                    {
                                        value: "moreThanTwo",
                                        label: "More than two doses",
                                    },
                                ]}
                                value={vaccineHistory.dosesReceived}
                                onChange={(e: any) =>
                                    setPatientData((prevData: any) => ({
                                        ...prevData,
                                        vaccineHistory: {
                                            ...prevData.vaccineHistory,
                                            dosesReceived: e.target.value,
                                        },
                                    }))
                                }
                                customeStyle="py-2 px-4"
                                parentDivStyle="w-full"
                            />

                            <ReusableSelectField
                                htmlfor="timeSinceLastVaccination"
                                label="Time Since Last Vaccination"
                                required={true}
                                options={[
                                    {
                                        value: "lessThanHalfYear",
                                        label: "Less than half a year",
                                    },
                                    {
                                        value: "moreThanYear",
                                        label: "More than a year",
                                    },
                                    {
                                        value: "overYear",
                                        label: "Over one year",
                                    },
                                ]}
                                value={vaccineHistory.timeSinceLastVaccination}
                                onChange={(e: any) =>
                                    setPatientData((prevData: any) => ({
                                        ...prevData,
                                        vaccineHistory: {
                                            ...prevData.vaccineHistory,
                                            timeSinceLastVaccination:
                                                e.target.value,
                                        },
                                    }))
                                }
                                customeStyle="py-2 px-4"
                                parentDivStyle="w-full"
                            />
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center justify-center h-full w-full">
                    {vaccineHistory.immunizationHistory.map(
                        (entry: any, index: number) => (
                            <div
                                key={index}
                                className="flex flex-col w-2/3 justify-between items-center gap-5"
                            >
                                <ReusableInputField
                                    htmlfor={`vaccines_${index}`}
                                    label="Other Vaccines"
                                    type="text"
                                    required={true}
                                    value={entry.vaccines}
                                    onChange={(e: any) =>
                                        updateImmunizationHistoryEntry(
                                            index,
                                            "vaccines",
                                            e.target.value
                                        )
                                    }
                                    customeStyle="py-2 px-4"
                                    parentDivStyle="w-full"
                                />

                                <ReusableInputField
                                    htmlfor={`dateOfVaccine_${index}`}
                                    label="Date of Vaccine"
                                    required={true}
                                    type="date"
                                    value={entry.dateOfVaccine}
                                    onChange={(e: any) =>
                                        updateImmunizationHistoryEntry(
                                            index,
                                            "dateOfVaccine",
                                            e.target.value
                                        )
                                    }
                                    customeStyle="py-2 px-4"
                                    parentDivStyle="w-full"
                                />

                                {vaccineHistory.immunizationHistory.length >
                                    1 && ( // Show delete button for rows if there's more than one row
                                    <ReusableButton
                                        label="Delete"
                                        customeStyle="bg-red-400 text-white hover:bg-red-600 duration-200"
                                        onClick={() =>
                                            deleteImmunizationHistoryEntry(
                                                index
                                            )
                                        }
                                    />
                                )}
                            </div>
                        )
                    )}

                    <div className="w-2/3 my-5">
                        <button
                            className="w-auto  text-sky-400 text-lg"
                            onClick={addImmunizationHistoryEntry}
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
        </div>
    );
};

export default PStep6;
