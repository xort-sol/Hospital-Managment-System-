import React from "react";
import HAddPatientHero from "./HospitalDBComponents/HAddPaitent/HAddPatientHero";

type Props = {};

const HospitalAddPatient: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            <HAddPatientHero />
        </div>
    );
};

export default HospitalAddPatient;
