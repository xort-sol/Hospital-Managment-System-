import { FC } from "react";
import f1 from "../../../../../assets/dashboardIcons/h/f1.png";
type Props = {};

const HAddDoctorHero: FC<Props> = () => {
    return (
        <div className="w-full h-full">
            <div className="p-5 w-11/12 h-full">
                <div className="bg-blue_color p-2 rounded-2xl h-32 text-white flex justify-between items-center">
                    <div className="flex flex-col gap-3 p-3">
                        <h2 className="text-2xl font-semibold">Add Doctor</h2>

                        <p className="text-sm max-w-xl">
                            Introducing our interactive symptom assessment and
                            questioning feature, which leverages AI technology
                            to enhance the information -gathering process.
                        </p>
                    </div>

                    <img
                        src={f1}
                        alt="patientfile"
                        className="h-40 mb-8 w-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HAddDoctorHero;
