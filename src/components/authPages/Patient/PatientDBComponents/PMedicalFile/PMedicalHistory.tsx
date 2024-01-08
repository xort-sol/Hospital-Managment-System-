import { FC } from "react";
import {useState,useEffect} from "react";
import { GrShare } from "react-icons/gr";
import { MdDelete, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineFileZip } from "react-icons/ai";
import PMedicalFileUploadDocuments from "./PMedicalFileUploadDocuments";

type Props = {};

const PMedicalHistory: FC<Props> = () => {
    // Dummy medical history data
    const dummyMedicalHistory = {
        medicalCondition: "Hypertension",
        surgicalHistory: "Appendectomy",
        allergy: "Pollen",
        medication: "Aspirin",
    };

    // const dummyMedicalHistory = null;

    // Dummy immunization history data
    
    const [patientData, setPatientData] = useState<any>(null);

    useEffect(() => {
        // Replace the URL with the correct endpoint for fetching patient data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/hospital/getPatient/121212");
                const data = await response.json();
                setPatientData(data);
            } catch (error) {
                console.error("Error fetching patient data:", error);
            }
        };

        fetchData();
    }, []);

   

    return (
        <div className="w-full h-full">
            {/* Grid */}

            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Medical History as an Object */}

                <div className=" w-full bg-[#fff] rounded-t-md ">
                    {/* Heading */}

                    <div className="flex justify-between px-5 py-3 items-center w-full bg-gradient-to-br text-blue_color from-slate-50 to-slate-200 rounded-md shadow-lg">
                        <h1 className="text-xl font-semibold">
                            Medical History
                        </h1>
                        <MdOutlineKeyboardArrowDown className="text-2xl" />
                    </div>

                    <div className=" w-full flex flex-col gap-4 h-[20rem] overflow-y-auto px-5 py-3">
                        {patientData.medicalHistory ? (
                            <>
                                <div className=" flex flex-col w-full h-full gap-2">
                                    <h2 className="font-semibold text-[16px]">
                                        Medical Condition
                                    </h2>
                                    <p className="text-sm line-clamp-3">
                                        {patientData.medicalHistory.medicalCondition}
                                    </p>
                                </div>

                                <div className=" flex flex-col w-full h-full gap-2">
                                    <h2 className="font-semibold text-[16px]">
                                        Surgical history
                                    </h2>
                                    <p className="text-sm line-clamp-3">
                                        {patientData.medicalHistory.surgicalHistory}
                                    </p>
                                </div>

                                <div className=" flex flex-col w-full h-full gap-2">
                                    <h2 className="font-semibold text-[16px]">
                                        Allergies
                                    </h2>
                                    <p className="text-sm line-clamp-3">
                                        {patientData.medicalHistory.allergy}
                                    </p>
                                </div>

                                <div className=" flex flex-col w-full h-full gap-2">
                                    <h2 className="font-semibold text-[16px]">
                                        Medications
                                    </h2>
                                    <p className="text-sm line-clamp-3">
                                        {patientData.medicalHistory.medication}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <p className="text-center font-semibold text-xl my-5">
                                No Medical History Found
                            </p>
                        )}
                    </div>
                </div>

                {/* Immunization History As an Array */}

                <div className="  w-full bg-[#fff] rounded-t-md ">
                    {/* Heading */}

                    <div className="flex justify-between px-5 py-3 items-center w-full bg-gradient-to-br text-blue_color from-slate-50 to-slate-200 rounded-md shadow-lg">
                        <h1 className="text-xl font-semibold">
                            Immunization History
                        </h1>
                        <MdOutlineKeyboardArrowDown className="text-2xl" />
                    </div>

                    <div className=" w-full flex flex-col gap-2 h-[20rem] overflow-y-auto">
                        {patientData.vaccineHistory.immunizationHistory.length > 0 ? (
                            patientData.vaccineHistory.immunizationHistory.map((item, index) => (
                                <div
                                    className="w-full h-20 flex  justify-between px-5 py-3 items-start "
                                    key={index}
                                >
                                    <div className="flex flex-col justify-start items-start gap-3">
                                        <h3 className="text-[16px] font-semibold">
                                            Vaccine {index + 1}
                                        </h3>
                                        <p className="text-sm line-clamp-1">
                                            {item.vaccines}
                                        </p>
                                    </div>

                                    <p className="font-semibold text-[16px]">
                                        {item.dateOfVaccine}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center font-semibold text-xl my-5">
                                No Data Found
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <PMedicalFileUploadDocuments />

            <div className="h-auto w-full bg-[#fff] rounded-t-md my-10">
                <div className="flex justify-between px-5 py-3 items-center w-full bg-gradient-to-br text-blue_color from-slate-50 to-slate-200 rounded-md shadow-lg">
                    <h1 className="text-xl font-semibold">Documents</h1>
                    <MdOutlineKeyboardArrowDown className="text-2xl" />
                </div>

                <div className=" w-full flex flex-col gap-2 h-[20rem] overflow-y-auto">
                    {uploadDocuments.length > 0 ? (
                        uploadDocuments?.map((item, index) => (
                            <div
                                className="w-full h-20 flex justify-between py-10 px-5 items-start text-blue_color "
                                key={index}
                            >
                                <div className=" flex justify-center items-center gap-3">
                                    <AiOutlineFileZip className="text-3xl" />
                                    <p className="font-semibold">
                                        {item?.name}
                                    </p>
                                </div>

                                <div className="flex justify-end items-center gap-5">
                                    <GrShare className="text-base text-blue_color" />
                                    <MdDelete className="text-xl text-red-400" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Data found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PMedicalHistory;
