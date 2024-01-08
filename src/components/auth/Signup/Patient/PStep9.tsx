import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupDecrement } from "../../../../redux/features/signup/signupSlice";
import { ReusableButton } from "../../../utils/Components";
import { BsUpload } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { changerole } from "../../../../redux/features/auth/authSlice";
type Props = {
    uploadDocuments: any;
    patientData: any;
    setPatientData: any;
};

const PStep9: React.FC<Props> = ({ uploadDocuments, patientData, setPatientData }) => {
    const dispatch = useDispatch();
    const [dragging, setDragging] = useState(false);

    const navigate = useNavigate();

    const handleDrop = (e: any) => {
        e.preventDefault();
        setDragging(false);
        const files = Array.from(e.dataTransfer.files);

        // Update the state with the new files
        setPatientData((prevData: any) => ({
            ...prevData,
            uploadDocuments: [...prevData.uploadDocuments, ...files],
        }));
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleRemoveDocument = (index: number) => {
        setPatientData((prevData: any) => {
            const updatedDocuments = [...prevData.uploadDocuments];
            updatedDocuments.splice(index, 1);
            return {
                ...prevData,
                uploadDocuments: updatedDocuments,
                memberShipCode: localStorage.getItem('memberShipCode'),
            };
        });
    };

    const handleNextClick = async () => {
        try {
          // Call your API to register the patient
          const memberShipNo = localStorage.getItem('memberShipNo');
          patientData.memberShipNo = memberShipNo;
          const response = await fetch('http://localhost:5000/patient/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(patientData),
          });
    
          if (!response.ok) {
            throw new Error('Failed to register patient');
          }
          else
          {
            console.log("Data Saved Successfully for"+ patientData.personalDetails.firstName);
            window.alert("Data Saved Successfully");
          }
    
          // Navigate to the patient dashboard upon successful registration
          changerole("patient");
          navigate('/patient/dashboard');
        } catch (error) {
          console.error('Error registering patient:', error);
        }
      };
    

    const handleBackClick = () => {
        dispatch(signupDecrement());
    };

    return (
        <div className="h-full w-full">
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div
                    className="flex flex-col gap-6 w-2/3 my-5 "
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                >
                    <label
                        htmlFor="fileInput"
                        className={`${
                            dragging ? "bg-blue-400" : ""
                        } h-60 flex justify-center items-center relative cursor-pointer p-4 border-2 border-dashed border-blue_color rounded-md text-center duration-300`}
                    >
                        {dragging ? (
                            <div className="text-white text-xl">
                                Drop files here
                            </div>
                        ) : (
                            <div className="text-blue_color text-xl flex flex-col items-center justify-center gap-5">
                                <BsUpload className=" text-2xl " />

                                <p>
                                    Drag and drop files here or click to select
                                </p>
                            </div>
                        )}
                        <input
                            type="file"
                            id="fileInput"
                            multiple
                            className="hidden"
                            onChange={(e: any) => {
                                // Handle file selection via the input field
                                const files = Array.from(e.target.files);
                                setPatientData((prevData: any) => ({
                                    ...prevData,
                                    uploadDocuments: [
                                        ...prevData.uploadDocuments,
                                        ...files,
                                    ],
                                }));
                            }}
                        />
                    </label>
                </div>

                <div className="flex w-2/3 flex-col gap-5 my-3">
                    <h2 className="text-2xl font-bold text-blue_color">
                        File Added
                    </h2>
                    <ul>
                        {uploadDocuments?.map((file: any, index: any) => (
                            <div
                                key={index}
                                className="flex gap-2 items-center justify-between my-8"
                            >
                                <p className="text-xl">{file.name}</p>

                                <ReusableButton
                                    onClick={() => handleRemoveDocument(index)}
                                    label="Remove"
                                    customeStyle="bg-red-400 hover:bg-red-600 duration-200"
                                />
                            </div>
                        ))}
                    </ul>
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

export default PStep9;
