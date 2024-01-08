import { FC, useState } from "react";
import {
    ReusableButton,
    ReusableInputField,
    ReusableSelectField,
} from "../../../../utils/Components";

import usa from "../../../../../assets/flag/us.png"; // Replace with the correct path to your flag images
import canada from "../../../../../assets/flag/canada.png";
import brazil from "../../../../../assets/flag/brazil-.png";

type Props = {};

type SelectOption = {
    value: string;
    label: string;
    key?: number | string;
};

const countryOptions = [
    { value: "+1", label: "USA (+1)", flag: usa },
    { value: "+1", label: "Canada (+1)", flag: canada },
    { value: "+55", label: "Brazil (+55)", flag: brazil },
    // Add more countries as needed
];

const specializationOptions: SelectOption[] = [
    { value: "Cardiology", label: "Cardiology" },
    { value: "Orthopedics", label: "Orthopedics" },
    { value: "Dermatology", label: "Dermatology" },
    { value: "Neurology", label: "Neurology" },
    { value: "Pediatrics", label: "Pediatrics" },
    { value: "Oncology", label: "Oncology" },
    { value: "Gastroenterology", label: "Gastroenterology" },
    { value: "Endocrinology", label: "Endocrinology" },
    { value: "Ophthalmology", label: "Ophthalmology" },
    { value: "Psychiatry", label: "Psychiatry" },
    { value: "Urology", label: "Urology" },
    { value: "Rheumatology", label: "Rheumatology" },
];

const qualificationOptions: SelectOption[] = [
    { value: "MBBS", label: "MBBS" },
    { value: "MD", label: "MD" },
    { value: "MS", label: "MS" },
    { value: "DM", label: "DM" },
    { value: "MCh", label: "MCh" },
    { value: "DNB", label: "DNB" },
    { value: "PhD", label: "PhD" },
    // Add more qualification options as needed
];

const HAddDoctorForm: FC<Props> = () => {
    const [selectedCountry, setSelectedCountry] = useState({
        value: "+1",
        label: "USA (+1)",
        flag: usa,
    });

    const [doctorInfo, setDoctorInfo] = useState({
        fullName: "",
        email: "",
        password: "",
        specialization: "",
        qualifications: "",
        license: "",
        phoneNumber: "",
        hospitalName: "",
        department: "",
        workingHours: "",
        bio: "",
        profilePicture: "",
        socialMedia: "",
        languages: "",
        insuranceInfo: "",
        emergencyContact: "",
        // Add other fields as needed
    });

    const handleDoctorInfoChange = (key: string, value: any) => {
        setDoctorInfo((prevInfo) => ({
            ...prevInfo,
            [key]: value,
        }));
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = e.target;
        // Store the phone number without the country code
        setDoctorInfo((prevInfo) => ({
            ...prevInfo,
            phoneNumber: value,
        }));
    };

    const handleCountryChange = (newSelectedCountry: any) => {
        setSelectedCountry(newSelectedCountry);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
        // Concatenate the country code with the phone number
        const phoneNumberWithCountryCode =
            selectedCountry.value + doctorInfo.phoneNumber;

        // Create a new object with the updated phoneNumber
        const hospitalId = localStorage.getItem('memberShipCode');
        const doctorInfoForSubmission = {
            ...doctorInfo,
            phoneNumber: phoneNumberWithCountryCode,
            userType:"doctor",

        };
        console.log("Doctor Info submitted:", doctorInfo);
        try {
            // You can replace the hardcoded patient membership code with your logic to get it
             // Replace with your logic to get the patient code
            window.alert("heelo");
            const response = await fetch(`http://localhost:5000/doctor/add/${hospitalId}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                doctorInfoForSubmission
              }),
            });
        
            if (response.ok) {
              const result = await response.json();
              window.alert("Doctor added successfully")
              console.log("Submited");
              console.log(result.message);
            } else {
              const error = await response.json();
              console.error(`Failed to add Doctor: ${error.message}`);
            }
          } catch (error) {
            console.error("Error adding Doctor:", error);
          }
        };



    return (
        <div className="w-full h-full ">
            <div className="w-full h-full">
                <form
                    onSubmit={handleSubmit}
                    className="w-full h-full  flex flex-col gap-10 justify-center items-center p-5"
                >
                    {/* Code will goes here */}
                    <ReusableInputField
                        htmlfor="fullname"
                        label="Full Name"
                        required={true}
                        placeholder="Enter Full Name"
                        value={doctorInfo.fullName}
                        onChange={(e: any) =>
                            handleDoctorInfoChange("fullName", e.target.value)
                        }
                        customeStyle="py-2 px-4 "
                        parentDivStyle="w-full"
                    />

                    {/* Email */}
                    <ReusableInputField
                        htmlfor="doctoremail"
                        label="Email Address"
                        placeholder="Enter Email"
                        required={true}
                        type="email"
                        value={doctorInfo.email}
                        onChange={(e: any) =>
                            handleDoctorInfoChange("email", e.target.value)
                        }
                        customeStyle="py-2 px-4 "
                        parentDivStyle="w-full"
                    />

                    {/* Email */}
                    <ReusableInputField
                        htmlfor="password"
                        placeholder="Enter Password"
                        label="Password"
                        required={true}
                        type="password"
                        value={doctorInfo.password}
                        onChange={(e: any) =>
                            handleDoctorInfoChange("password", e.target.value)
                        }
                        customeStyle="py-2 px-4 "
                        parentDivStyle="w-full"
                    />

                    {/* Specialzation */}
                    <ReusableSelectField
                        htmlfor="specialization"
                        label="Specialization"
                        required={true}
                        options={specializationOptions}
                        value={doctorInfo.specialization}
                        onChange={(e: any) =>
                            handleDoctorInfoChange(
                                "specialization",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    {/* Qualification */}

                    <ReusableSelectField
                        htmlfor="qualifications"
                        label="Qualifications"
                        required={true}
                        options={qualificationOptions}
                        value={doctorInfo.qualifications}
                        onChange={(e: any) =>
                            handleDoctorInfoChange(
                                "qualifications",
                                e.target.value
                            )
                        }
                        customeStyle="py-2 px-4"
                        parentDivStyle="w-full"
                    />

                    {/* License */}
                    <ReusableInputField
                        htmlfor="license"
                        placeholder="Enter License"
                        label="License"
                        required={true}
                        type="license"
                        value={doctorInfo.license}
                        onChange={(e: any) =>
                            handleDoctorInfoChange("license", e.target.value)
                        }
                        customeStyle="py-2 px-4 "
                        parentDivStyle="w-full"
                    />

                    <div className="w-full">
                        <label
                            htmlFor="phonenumber"
                            className="block  text-sm ml-1  mb-2"
                        >
                            Phone Number
                        </label>
                        <div className="flex w-full justify-start items-center  border rounded-full">
                            <div className="relative inline-block w-72">
                                <div className="w-full bg-white rounded-l-full">
                                    <div
                                        className="flex items-center justify-between cursor-pointer border-r"
                                        onClick={() => {
                                            document
                                                .getElementById(
                                                    "country-options"
                                                )
                                                ?.classList.toggle("hidden");
                                        }}
                                    >
                                        <div>
                                            {selectedCountry ? (
                                                <div className="flex w-36  justify-start items-center gap-2 p-1">
                                                    <img
                                                        src={
                                                            selectedCountry?.flag
                                                        }
                                                        alt="country"
                                                        className="h-8 w-8 object-cover"
                                                    />
                                                    <p>
                                                        {selectedCountry?.label}
                                                    </p>
                                                </div>
                                            ) : (
                                                <span>Select Country Code</span>
                                            )}
                                        </div>
                                        <div className=" absolute right-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="country-options"
                                    className="hidden absolute w-60 h-58 overflow-y-auto  bg-white border border-gray-300 rounded-lg shadow-lg"
                                >
                                    {countryOptions.map((option, index) => (
                                        <div
                                            key={index}
                                            className="cursor-pointer p-4 hover:bg-blue-100 flex items-center justify-start gap-1 "
                                            onClick={() => {
                                                handleCountryChange(option);
                                                document
                                                    .getElementById(
                                                        "country-options"
                                                    )
                                                    ?.classList.add("hidden");
                                            }}
                                        >
                                            <img
                                                src={option.flag}
                                                alt="country"
                                                className="h-8 w-8 object-cover"
                                            />{" "}
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <input
                                type="text"
                                value={doctorInfo.phoneNumber}
                                onChange={handlePhoneNumberChange}
                                placeholder="Enter Phone Number"
                                className="p-2  w-full   rounded-r-full"
                            />
                        </div>
                    </div>

                    {/* Submit button */}

                    <div className="flex w-full justify-center items-center gap-10">
                        <ReusableButton
                            label="Create"
                            type="submit"
                            
                            customeStyle="bg-gray_color text-white my-5"
                        />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default HAddDoctorForm;
