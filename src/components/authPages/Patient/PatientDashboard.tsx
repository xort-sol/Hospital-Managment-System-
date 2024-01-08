import React from "react";
import PDashboardHero from "./PatientDBComponents/PDashboard/PDashboardHero";
import PListOfNearByHospital from "./PatientDBComponents/PDashboard/PListOfNearByHospital";

type Props = {};

const PatientDashboard: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            <PDashboardHero />
            <PListOfNearByHospital />
        </div>
    );
};

export default PatientDashboard;
