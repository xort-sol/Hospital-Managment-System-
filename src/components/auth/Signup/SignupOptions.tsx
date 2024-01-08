import { FC } from "react";
import { useSelector } from "react-redux";

// importing icons

import g1w from "../../../assets/signup/icons/g1w.png";
import g1b from "../../../assets/signup/icons/g1b.png";

import g2w from "../../../assets/signup/icons/g2w.png";
import g2b from "../../../assets/signup/icons/g2b.png";

// patient
import p1w from "../../../assets/signup/patient/p1w.png";
import p1b from "../../../assets/signup/patient/p1b.png";

import p2w from "../../../assets/signup/patient/p2w.png";
import p2b from "../../../assets/signup/patient/p2b.png";

import p3w from "../../../assets/signup/patient/p3w.png";
import p3b from "../../../assets/signup/patient/p3b.png";

import p4w from "../../../assets/signup/patient/p4w.png";
import p4b from "../../../assets/signup/patient/p4b.png";

import p5w from "../../../assets/signup/patient/p5w.png";
import p5b from "../../../assets/signup/patient/p5b.png";

import p6w from "../../../assets/signup/patient/p6w.png";
import p6b from "../../../assets/signup/patient/p6b.png";

import p7w from "../../../assets/signup/patient/p7w.png";
import p7b from "../../../assets/signup/patient/p7b.png";

// Hospitals

import h1b from "../../../assets/signup/hospital/h1b.png";
import h1w from "../../../assets/signup/hospital/h1w.png";

import h2b from "../../../assets/signup/hospital/h2b.png";
import h2w from "../../../assets/signup/hospital/h2w.png";

import h3b from "../../../assets/signup/hospital/h3b.png";
import h3w from "../../../assets/signup/hospital/h3w.png";

import h4b from "../../../assets/signup/hospital/h4b.png";
import h4w from "../../../assets/signup/hospital/h4w.png";

// Ambulance

type Props = {
    accountType: string;
};

const StepInfo = ({ number, label }: any) => {
    return (
        <div className=" flex flex-col gap-1">
            <p className="text-blue_color text-xs font-bold ">
                Step {number}/9
            </p>
            <p className=" text-xs font-bold max-w-[80px] ">{label}</p>
        </div>
    );
};

const SignupOptions: FC<Props> = ({ accountType }) => {
    const { active } = useSelector((state: any) => state.signupProcess);

    return (
        <div className="w-full h-full">
            <div className="flex flex-wrap gap-10 justify-center items-center ">
                {/* step 1 */}
                <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                    <div
                        className={`${
                            active === 1 ? "bg-blue_color" : "bg-sky_color"
                        } h-14 w-14 rounded-full p-2 flex justify-center items-center `}
                    >
                        <img
                            src={active === 1 ? g1w : g1b}
                            alt="accountType"
                            className=" h-12 w-auto object-cover"
                        />
                    </div>

                    {active === 1 && (
                        <StepInfo number={1} label={"Account Type"} />
                    )}
                </div>

                {/* step 2 */}
                <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                    <div
                        className={`${
                            active === 2 ? "bg-blue_color" : "bg-sky_color"
                        } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                    >
                        <img
                            src={active === 2 ? g2w : g2b}
                            alt="accountType"
                            className=" h-10 w-auto object-cover"
                        />
                    </div>

                    {active === 2 && (
                        <StepInfo number={2} label={"Verification"} />
                    )}
                </div>

                {/* Patient */}
                {accountType === "patient" && (
                    <>
                        {/* // Patient 1 icons */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 3
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 3 ? p1w : p1b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 3 && (
                                <StepInfo
                                    number={3}
                                    label={"Personal Details"}
                                />
                            )}
                        </div>

                        {/* // Patient  icons 2 */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 4
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 4 ? p2w : p2b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 4 && (
                                <StepInfo number={4} label={"Travel Details"} />
                            )}
                        </div>

                        {/* // Patient  icons 3 */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 5
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 5 ? p3w : p3b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 5 && (
                                <StepInfo
                                    number={5}
                                    label={"Medical History"}
                                />
                            )}
                        </div>

                        {/* // Patient  icons 4 */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 6
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 6 ? p4w : p4b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 6 && (
                                <StepInfo
                                    number={6}
                                    label={"Immunization History"}
                                />
                            )}
                        </div>

                        {/* // Patient  icons 5 */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 7
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 7 ? p5w : p5b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 7 && (
                                <StepInfo
                                    number={7}
                                    label={"Emergency Contacts"}
                                />
                            )}
                        </div>

                        {/* // Patient  icons 6 */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 8
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 8 ? p6w : p6b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 8 && (
                                <StepInfo
                                    number={7}
                                    label={"Lifestyle Factors"}
                                />
                            )}
                        </div>

                        {/* // Patient  icons 7 */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 9
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 9 ? p7w : p7b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 9 && (
                                <StepInfo
                                    number={7}
                                    label={"Upload Documents"}
                                />
                            )}
                        </div>
                    </>
                )}

                {/* Hospital */}
                {accountType === "hospital" && (
                    <>
                        {/* // Hospital 1 icons */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 3
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 3 ? h1w : h1b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 3 && (
                                <StepInfo
                                    number={3}
                                    label={"General Information"}
                                />
                            )}
                        </div>

                        {/* // Hospital  icons 2 */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 4
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 4 ? h2w : h2b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 4 && (
                                <StepInfo number={4} label={"Upload Logo"} />
                            )}
                        </div>

                        {/* // Hospital  icons 3 */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 5
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 5 ? h3w : h3b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 5 && (
                                <StepInfo number={5} label={"Working Hours"} />
                            )}
                        </div>

                        {/* // Hospital  icons 4 */}

                        <div className="flex w-auto h-full justify-center items-center gap-2 slide_top">
                            <div
                                className={`${
                                    active === 6
                                        ? "bg-blue_color"
                                        : "bg-sky_color"
                                } h-16 w-16 rounded-full p-2 flex justify-center items-center `}
                            >
                                <img
                                    src={active === 6 ? h4w : h4b}
                                    alt="accountType"
                                    className=" h-10 w-auto object-cover"
                                />
                            </div>

                            {active === 6 && (
                                <StepInfo
                                    number={6}
                                    label={"Available Doctors"}
                                />
                            )}
                        </div>
                    </>
                )}
                {/* Ambulance */}
            </div>
        </div>
    );
};

export default SignupOptions;
