import React from "react";
import PDashboardHero from "../Patient/PatientDBComponents/PDashboard/PDashboardHero";
import PListOfNearByHospital from "../Patient/PatientDBComponents/PDashboard/PListOfNearByHospital";

type Props = {};

const AmbulanceDashboard: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            <PDashboardHero />
            <PListOfNearByHospital />
        </div>
    );
};
export default AmbulanceDashboard;
