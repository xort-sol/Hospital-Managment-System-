import React from "react";
import HInvoiceHero from "./HospitalDBComponents/HInvoices/HInvoiceHero";

type Props = {};

const HospitalInvoices: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            {/*  */}
            <HInvoiceHero />
        </div>
    );
};
export default HospitalInvoices;
