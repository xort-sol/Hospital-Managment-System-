import React from "react";
import DashboardSidebar from "../DashboardLayout/DashboardSidebar";
import DashboardTopbar from "../DashboardLayout/DashboardTopbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../layout/NotFound/NotFound";
import AmbulanceDashboard from "./AmbulanceDashboard";
import AmbulanceAddPatient from "./AmbulanceAddPatient";
import AmbulanceChatBox from "./AmbulanceChatBox";
import AmbulanceInvoices from "./AmbulanceInvoices";
import AmbulanceSettings from "./AmbulanceSettings";
import PatientChatDetailsPage from "../Patient/PatientPages/PatientChatDetailsPage";

type Props = {};

const AmbulanceIndex: React.FC<Props> = () => {
    return (
        <main className="h-full w-full">
            <div className="h-full w-full flex justify-start items-start">
                {/* Sidebar */}
                <section className="w-1/5 min-h-screen  p-5 ">
                    <DashboardSidebar />
                </section>

                {/* Content */}
                <section className="w-4/5 min-h-screen bg-sky_color p-5">
                    <DashboardTopbar />
                    {/* Content Data */}
                    <Routes>
                        <Route
                            path="/dashboard"
                            element={<AmbulanceDashboard />}
                        />

                        <Route
                            path="/addpatient"
                            element={<AmbulanceAddPatient />}
                        />

                        <Route path="/chatbox" element={<AmbulanceChatBox />} />
                        <Route
                            path="/chatbox/:username"
                            element={<PatientChatDetailsPage />}
                        />

                        <Route
                            path="/invoices"
                            element={<AmbulanceInvoices />}
                        />

                        <Route
                            path="/settings"
                            element={<AmbulanceSettings />}
                        />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </section>
            </div>
        </main>
    );
};
export default AmbulanceIndex;
