import { ReusableButton, ReusableInputField } from "../../../utils/Components";
import { signupDecrement } from "../../../../redux/features/signup/signupSlice";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { changerole } from "../../../../redux/features/auth/authSlice";

type Props = {
    setHospitalData: any;
    availableDoctors: any;
    hospitalData:any
};

const HStep6: FC<Props> = ({ availableDoctors,hospitalData, setHospitalData }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Function to add a new immunization history entry
    const addavailableDoctorsEntry = () => {
        setHospitalData((prevData: any) => ({
            ...prevData,
            availableDoctors: [
                ...prevData.availableDoctors,
                { fullName: "", selectAccount: "" },
            ],
        }));
    };

    // Function to update a specific immunization history entry
    const updateavailableDoctorsEntry = (
        index: number,
        field: string,
        value: string
    ) => {
        setHospitalData((prevData: any) => {
            const updatedavailableDoctors = [...prevData.availableDoctors];
            updatedavailableDoctors[index][field] = value;
            return {
                ...prevData,
                availableDoctors: updatedavailableDoctors,
            };
        });
    };

    // Function to delete a specific immunization history entry
    const deleteavailableDoctorsEntry = (index: number) => {
        if (availableDoctors.length > 1) {
            setHospitalData((prevData: any) => {
                const updatedavailableDoctors = [...prevData.availableDoctors];
                updatedavailableDoctors.splice(index, 1);
                return {
                    ...prevData,
                    availableDoctors: updatedavailableDoctors,
                };
            });
        } else {
            toast.error(
                "You must have at least one immunization history entry."
            );
        }
    };

    const handleNextClick = async () => {

        
        try {
          // If you have validation logic, you can perform it here before proceeding
          // For example, check if required fields are filled.
          if (
            availableDoctors[availableDoctors.length - 1]?.fullName !== "" &&
            availableDoctors[availableDoctors.length - 1]?.selectAccount !== ""
          ) {
            // Use hospitalData prop passed and register hospital
            const memberShipNo=localStorage.getItem('memberShipNo');
            hospitalData.memberShipNo = memberShipNo;
            const response = await fetch("http://localhost:5000/hospital", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(hospitalData),
            });
      
            if (response.ok) {
              const data = await response.json();
              console.log("Hospital added:", data);
              changerole("hospital")
              navigate("/hospital/addpatient");
            //   dispatch()
            } else {
              console.error("Hospital registration failed:", response.status);
              window.alert("Hospital registration failed. Please try again.");
            }
          } else {
            toast.error(
              "Please add at least one available Doctors entry with both 'fullName' and 'selectAccount' filled."
            );
          }
        } catch (error:any) {
          console.error("Error:", error.message);
          window.alert("An error occurred. Please try again.");
        }


      };
      
    const handleBackClick = () => {
        dispatch(signupDecrement());
    };

    return (
        <div className="h-full w-full">
            <div className="flex flex-col items-center justify-center h-full w-full ">
                {availableDoctors?.map((entry: any, index: number) => (
                    <div
                        key={index}
                        className="flex flex-col w-2/3 justify-between items-center gap-5"
                    >
                        <ReusableInputField
                            htmlfor={`fullName_${index}`}
                            label="Full Name"
                            type="text"
                            required={true}
                            value={entry.fullName}
                            onChange={(e: any) =>
                                updateavailableDoctorsEntry(
                                    index,
                                    "fullName",
                                    e.target.value
                                )
                            }
                            customeStyle="py-2 px-4"
                            parentDivStyle="w-full"
                        />

                        <ReusableInputField
                            htmlfor={`selectAccount_${index}`}
                            label="selectAccount"
                            required={true}
                            type="text"
                            value={entry.selectAccount}
                            onChange={(e: any) =>
                                updateavailableDoctorsEntry(
                                    index,
                                    "selectAccount",
                                    e.target.value
                                )
                            }
                            customeStyle="py-2 px-4"
                            parentDivStyle="w-full"
                        />

                        {availableDoctors.length > 1 && ( // Show delete button for rows if there's more than one row
                            <ReusableButton
                                label="Delete"
                                customeStyle="bg-red-400 text-white hover:bg-red-600 duration-200"
                                onClick={() =>
                                    deleteavailableDoctorsEntry(index)
                                }
                            />
                        )}
                    </div>
                ))}

                <div className="w-2/3 my-5">
                    <button
                        className="w-auto  text-sky-400 text-lg"
                        onClick={addavailableDoctorsEntry}
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

export default HStep6;
