import React from "react";
import HAddFormHero from "./HospitalDBComponents/HAddForm/HAddFormHero";

type Props = {};

const HospitalAddForm: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            <HAddFormHero />
        </div>
    );
};

export default HospitalAddForm;
