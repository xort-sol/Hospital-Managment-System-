import React from "react";
import HAddPatientHero from "../Hospital/HospitalDBComponents/HAddPaitent/HAddPatientHero";

type Props = {};

const AmbulanceAddPatient: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            <HAddPatientHero />
        </div>
    );
};
export default AmbulanceAddPatient;
