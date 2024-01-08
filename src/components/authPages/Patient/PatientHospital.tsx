import React from "react";
import PHospitalHero from "./PatientDBComponents/PHospital/PHospitalHero";
import PSearchHospital from "./PatientDBComponents/PHospital/PSearchHospital";

type Props = {};

const PatientHospital: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            <PHospitalHero />
            <PSearchHospital />
        </div>
    );
};

export default PatientHospital;
