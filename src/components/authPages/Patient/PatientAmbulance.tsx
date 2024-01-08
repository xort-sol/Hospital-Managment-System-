import React from "react";
import PAmbulanceHero from "./PatientDBComponents/PAmbulance/PAmbulanceHero";
import PSearchAmbulance from "./PatientDBComponents/PAmbulance/PSearchAmbulance";

type Props = {};

const PatientAmbulance: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            <PAmbulanceHero />
            <PSearchAmbulance />
        </div>
    );
};

export default PatientAmbulance;
