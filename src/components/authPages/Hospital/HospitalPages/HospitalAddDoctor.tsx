import { FC } from "react";
import HAddDoctorHero from "../HospitalDBComponents/HAddDoctor/HAddDoctorHero";
import HAddDoctorForm from "../HospitalDBComponents/HAddDoctor/HAddDoctorForm";

type Props = {};

const HospitalAddDoctor: FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            <div className="w-full h-full ">
                <HAddDoctorHero />
                <HAddDoctorForm />
            </div>
        </div>
    );
};

export default HospitalAddDoctor;
