import { ReusableButton } from "../../../utils/Components";
import {
    signupDecrement,
    signupIncrement,
} from "../../../../redux/features/signup/signupSlice";
import { useDispatch } from "react-redux";
import { FC, useState } from "react";
import { BsUpload } from "react-icons/bs";

type Props = {
    setHospitalData: any;
    uploadLogo: any;
};

const HStep4: FC<Props> = ({ setHospitalData, uploadLogo }) => {
    const dispatch = useDispatch();

    const [dragging, setDragging] = useState(false);

    const handleDrop = (e: any) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];

        // Update the state with the new file
        setHospitalData((prevData: any) => ({
            ...prevData,
            uploadLogo: file,
        }));
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
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
                            className="hidden"
                            onChange={(e: any) => {
                                const file = e.target.files[0];
                                if (file) {
                                    // Check if the selected file is an image (you can add more checks)
                                    if (file.type.startsWith("image/")) {
                                        setHospitalData({ uploadLogo: file });
                                    } else {
                                        // Display an error message for non-image files
                                        alert("Please select an image file.");
                                    }
                                }
                            }}
                        />
                    </label>
                </div>

                <div className="flex w-2/3 flex-col gap-5 my-3">
                    <h2 className="text-2xl font-bold text-blue_color">
                        File Added
                    </h2>
                    {uploadLogo && (
                        <div className="flex gap-2 items-center justify-between my-8">
                            <p className="text-xl">{uploadLogo.name}</p>

                            <ReusableButton
                                onClick={() =>
                                    setHospitalData({ uploadLogo: null })
                                }
                                label="Remove"
                                customeStyle="bg-red-400 hover:bg-red-600 duration-200"
                            />
                        </div>
                    )}
                </div>

                {/* Add a div to preview the image */}
                {uploadLogo && uploadLogo.type.startsWith("image/") && (
                    <div className="w-2/3 flex justify-center items-center">
                        <img
                            src={URL.createObjectURL(uploadLogo)}
                            alt="Preview"
                            className="w-auto h-40"
                        />
                    </div>
                )}

                {/* Button */}
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

export default HStep4;
