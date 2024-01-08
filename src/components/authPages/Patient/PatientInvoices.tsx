import React from "react";
import PInvoiceHero from "./PatientDBComponents/PInvoices/PInvoiceHero";

type Props = {};

const PatientInvoices: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            <PInvoiceHero />
        </div>
    );
};
export default PatientInvoices;
