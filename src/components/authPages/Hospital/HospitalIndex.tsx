import React from "react";
import DashboardSidebar from "../DashboardLayout/DashboardSidebar";
import DashboardTopbar from "../DashboardLayout/DashboardTopbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../layout/NotFound/NotFound";
import HospitalAddPatient from "./HospitalAddPatient";
import HospitalChatBox from "./HospitalChatBox";
import HospitalAddForm from "./HospitalAddForm";
import HospitalInvoices from "./HospitalInvoices";
import HospitalSettings from "./HospitalSettings";
import HospitalDashboard from "./HospitalDashboard";
import { useSelector } from "react-redux";
import HAddPatientModal from "./HospitalDBComponents/HModal/HAddPatientModal";
import HSinglePatientDetails from "./HospitalDBComponents/HAddPaitent/HSinglePatientDetails";
import HCreateInvoice from "./HospitalDBComponents/HInvoices/HCreateInvoice";
import HospitalAddDoctor from "./HospitalPages/HospitalAddDoctor";

import HospitalChatDetailsPage from "./HospitalPages/HospitalChatDetailsPage";

type Props = {};

const HospitalIndex: React.FC<Props> = () => {
    const { addPatientModal } = useSelector((state: any) => state.hospital);

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
                            element={<HospitalDashboard />}
                        />

                        <Route
                            path="/addpatient"
                            element={<HospitalAddPatient />}
                        />

                        <Route
                            path="/adddoctor"
                            element={<HospitalAddDoctor />}
                        />

                        {/* View Single patient */}

                        <Route
                            path="/patientdetails/:hSinglepatientID"
                            element={<HSinglePatientDetails />}
                        />

                        <Route path="/chatbox" element={<HospitalChatBox />} />
                        <Route
                            path="/chatbox/:username"
                            element={<HospitalChatDetailsPage />}
                        />

                        <Route path="/addform" element={<HospitalAddForm />} />

                        <Route
                            path="/invoices"
                            element={<HospitalInvoices />}
                        />

                        <Route
                            path="/invoice/create"
                            element={<HCreateInvoice />}
                        />

                        <Route
                            path="/settings"
                            element={<HospitalSettings />}
                        />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </section>

                {/* Modals */}

                {addPatientModal && <HAddPatientModal />}
            </div>
        </main>
    );
};
export default HospitalIndex;
