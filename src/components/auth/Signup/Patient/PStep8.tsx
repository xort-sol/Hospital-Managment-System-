import { useDispatch } from "react-redux";
import {
    signupDecrement,
    signupIncrement,
} from "../../../../redux/features/signup/signupSlice";
import { ReusableButton, ReusableSelectField } from "../../../utils/Components";
import { FC } from "react";

type Props = {
    lifestyleFactors: any;
    setPatientData: any;
};

const PStep8: FC<Props> = ({ lifestyleFactors, setPatientData }) => {
    const dispatch = useDispatch();

    const handlelifestyleFactorsChange = (key: string, value: any) => {
        setPatientData((prevData: any) => ({
            ...prevData,
            lifestyleFactors: {
                ...prevData.lifestyleFactors,
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
                        htmlfor="smokingHabits"
                        label="Smoking Habits"
                        required={false}
                        options={[
                            { value: "no", label: "No" },
                            { value: "yes", label: "Yes" },
                        ]}
                        value={lifestyleFactors.smokingHabits}
                        onChange={(e: any) =>
                            handlelifestyleFactorsChange(
                                "smokingHabits",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableSelectField
                        htmlfor="alcoholConsumptions"
                        label="Alcohol Consumptions"
                        required={false}
                        options={[
                            { value: "notdrinking", label: "Not drinking" },
                            {
                                value: "occasionallydrinking",
                                label: "Occasionally drinking",
                            },
                            {
                                value: "frequentlydrinking",
                                label: "Frequently drinking",
                            },
                        ]}
                        value={lifestyleFactors.alcoholConsumptions}
                        onChange={(e: any) =>
                            handlelifestyleFactorsChange(
                                "alcoholConsumptions",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableSelectField
                        htmlfor="physicalActivityLevel"
                        label="Physical ActivityLevel"
                        required={false}
                        options={[
                            {
                                value: "sedentary",
                                label: "Sedentary (little or no exercise)",
                            },
                            {
                                value: "lightlyActive",
                                label: "Lightly Active (light exercise or sports 1-3 days a week)",
                            },
                            {
                                value: "moderatelyActive",
                                label: "Moderately Active (moderate exercise or sports 3-5 days a week)",
                            },
                            {
                                value: "veryActive",
                                label: "Very Active (hard exercise or sports 6-7 days a week)",
                            },
                            {
                                value: "superActive",
                                label: "Super Active (very hard exercise, physical job, or training)",
                            },
                        ]}
                        value={lifestyleFactors.physicalActivityLevel}
                        onChange={(e: any) =>
                            handlelifestyleFactorsChange(
                                "physicalActivityLevel",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    <ReusableSelectField
                        htmlfor="preferences"
                        label="Preferences/Restrictions"
                        required={false}
                        options={[
                            {
                                value: "none",
                                label: "None (No preferences or restrictions)",
                            },
                            { value: "vegetarian", label: "Vegetarian" },
                            { value: "vegan", label: "Vegan" },
                            { value: "glutenFree", label: "Gluten-Free" },
                            { value: "dairyFree", label: "Dairy-Free" },
                            { value: "nutFree", label: "Nut-Free" },
                            { value: "other", label: "Other" },
                        ]}
                        value={lifestyleFactors.preferences}
                        onChange={(e: any) =>
                            handlelifestyleFactorsChange(
                                "preferences",
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

export default PStep8;
