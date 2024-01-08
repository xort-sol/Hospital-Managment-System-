import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/pages/Home/Home";
import NotFound from "./components/layout/NotFound/NotFound";
import Login from "./components/auth/Login/Login";
import Signup from "./components/auth/Signup/Signup";

import { ToastContainer } from "react-toastify";

// Global Dashboard where it send users to thier dashboard
import RootDashboard from "./components/authPages/DashboardLayout/RootDashboard";

// protected Routes
// import Protectedroute from "./components/routes/Protectedroute";

import PreviewInvoice from "./components/authPages/GlobalAuthPages/PreviewInvoice/PreviewInvoice";

// Patient Files
import PatientIndex from "./components/authPages/Patient/PatientIndex";

// Hospital Files
import HospitalIndex from "./components/authPages/Hospital/HospitalIndex";

// Ambulance Files
import AmbulanceIndex from "./components/authPages/Ambulance/AmbulanceIndex";
import DoctorIndex from "./components/authPages/Doctor/DoctorIndex";

type Props = {};

const App: React.FC<Props> = () => {
    return (
        <div className=" w-full h-full ">
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Will wrap protected routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* ==================== */}
                {/* ==================== */}
                {/* ==================== */}

                {/* All will be wraped in Protected Routes */}
                {/* Root Dashboard */}
                <Route path="/dashboard" element={<RootDashboard />} />

                {/*     PATIENT      */}
                <Route
                    path="/patient/*"
                    element={
                        // <Protectedroute patientRoutes={true} redirect="/login">
                        <PatientIndex />
                        // </Protectedroute>
                    }
                />
                

                {/* ######################## */}

                {/*     HOSPITAL     */}
                <Route path="/hospital/*" element={<HospitalIndex />} />

                {/*     AMBULANCE    */}
                {/* /ambulance/dashboard */}
                <Route path="/ambulance/*" element={<AmbulanceIndex />} />

                {/* ==================== */}

                {/*     Doctor      */}
                <Route
                    path="/doctor/*"
                    element={
                        // <Protectedroute patientRoutes={true} redirect="/login">
                        <DoctorIndex />
                        // </Protectedroute>
                    }
                />

                {/* Invoice */}

                <Route
                    path="/viewinvoice/:invoiceID"
                    element={<PreviewInvoice />}
                />

                {/* ==================== */}
                {/* ==================== */}
                {/* ==================== */}

                {/* Not finding route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
        </div>
    );
};

export default App;
