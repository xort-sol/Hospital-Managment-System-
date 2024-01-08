import { FC } from "react";

import a1 from "../../../../../assets/dashboardIcons/p/a1.png";

type Props = {};

const PAmbulanceHero: FC<Props> = () => {
    return (
        <div className="w-full h-full flex flex-col gap-10 mb-10 justify-center items-center ">
            <div className="p-5 w-11/12 h-full">
                <div className="bg-blue_color p-2 rounded-2xl h-32 text-white flex justify-between items-center">
                    <div className="flex flex-col gap-3 p-3">
                        <h2 className="text-2xl font-semibold">
                            Do you need an ambulance ?
                        </h2>

                        <p className="text-sm max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                    <div className="flex justify-center items-start w-1/5 h-48">
                        <img
                            src={a1}
                            alt="ambulance"
                            className="h-44 w-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PAmbulanceHero;
