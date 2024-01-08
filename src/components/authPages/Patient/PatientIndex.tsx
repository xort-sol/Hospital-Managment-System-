import React from "react";
import DashboardSidebar from "../DashboardLayout/DashboardSidebar";
import DashboardTopbar from "../DashboardLayout/DashboardTopbar";
import { Route, Routes } from "react-router-dom";
import PatientHospital from "./PatientHospital";
import PatientAmbulance from "./PatientAmbulance";
import PatientMedicalFile from "./PatientMedicalFile";
import PatientChatBox from "./PatientChatBox";
import PatientInvoices from "./PatientInvoices";
import PatientSettings from "./PatientSettings";
import PatientDashboard from "./PatientDashboard";
import NotFound from "../../layout/NotFound/NotFound";
import { useSelector } from "react-redux";
import PAmbulanceModal from "./PatientDBComponents/PModal/PAmbulanceModal";
import PAllowingFileModal from "./PatientDBComponents/PModal/PAllowingFileModal";
import PViewSingleHospital from "./PViewSingleHospital";
import PatientChatDetailsPage from "./PatientPages/PatientChatDetailsPage";

type Props = {};

const PatientIndex: React.FC<Props> = () => {
    const { ambulanceModal, allowFileAccessModal } = useSelector(
        (state: any) => state.patient
    );

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
                            path="/dashboard"
                            element={<PatientDashboard />}
                        />

                        <Route
                            path="/hospitals"
                            element={<PatientHospital />}
                        />

                        <Route
                            path="/hospitals/:hospitalId"
                            element={<PViewSingleHospital />}
                        />

                        <Route
                            path="/ambulance"
                            element={<PatientAmbulance />}
                        />

                        <Route
                            path="/medicalfile"
                            element={<PatientMedicalFile />}
                        />

                        <Route path="/chatbox" element={<PatientChatBox />} />
                        <Route
                            path="/chatbox/:username"
                            element={<PatientChatDetailsPage />}
                        />

                        <Route path="/invoices" element={<PatientInvoices />} />

                        <Route path="/settings" element={<PatientSettings />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </section>

                {ambulanceModal && <PAmbulanceModal />}
                {allowFileAccessModal && <PAllowingFileModal />}
            </div>
        </main>
    );
};

export default PatientIndex;
