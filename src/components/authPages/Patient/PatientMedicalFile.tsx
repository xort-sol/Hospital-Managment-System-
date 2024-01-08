import React from "react";
import PMedicalFileHero from "./PatientDBComponents/PMedicalFile/PMedicalFileHero";
import PMedicalHistory from "./PatientDBComponents/PMedicalFile/PMedicalHistory";

type Props = {};

const PatientMedicalFile: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            <PMedicalFileHero />
            <PMedicalHistory />
        </div>
    );
};

export default PatientMedicalFile;
