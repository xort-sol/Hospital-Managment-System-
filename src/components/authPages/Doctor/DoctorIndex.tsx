import React from "react";
import DashboardSidebar from "../DashboardLayout/DashboardSidebar";
import DashboardTopbar from "../DashboardLayout/DashboardTopbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../layout/NotFound/NotFound";
import DoctorAddPatient from "./DoctorDBPages/DoctorAddPatient";
import DoctorChatBox from "./DoctorDBPages/DoctorChatBox";
import DoctorSettings from "./DoctorDBPages/DoctorSettings";
import PatientChatDetailsPage from "../Patient/PatientPages/PatientChatDetailsPage";
// import { useSelector } from "react-redux";

type Props = {};

const DoctorIndex: React.FC<Props> = () => {
    return (
        <main className="h-full w-full">
            <div className="h-full w-full flex justify-start items-start">
                {/* Sidebar */}
                <section className="w-1/5 min-h-screen  p-5 ">
                    <DashboardSidebar />
                </section>

                {/* Routes */}
                <section className="w-4/5 min-h-screen bg-sky_color p-3">
                    <DashboardTopbar />
                    {/* Routes Data */}
                    <Routes>
                        <Route
                            path="/addpatient"
                            element={<DoctorAddPatient />}
                        />

                        <Route path="/chatbox" element={<DoctorChatBox />} />
                        {/* Doctor will come later */}
                        <Route
                            path="/chatbox/:username"
                            element={<PatientChatDetailsPage />}
                        />
                        <Route path="/settings" element={<DoctorSettings />} />

                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </section>
            </div>
        </main>
    );
};

export default DoctorIndex;
