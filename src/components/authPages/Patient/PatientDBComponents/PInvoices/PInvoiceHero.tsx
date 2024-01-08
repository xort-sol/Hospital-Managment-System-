import { FC } from "react";

import i1 from "../../../../../assets/dashboardIcons/p/i1.png";
import PInvoiceTable from "./PInvoiceTable";

type Props = {};

const PInvoiceHero: FC<Props> = () => {
    return (
        <div className="w-full h-full flex flex-col gap-10 mb-10 justify-center items-center ">
            <div className="p-5 w-11/12 h-full">
                <div className="bg-blue_color p-2 rounded-2xl h-32 text-white flex justify-between items-center">
                    <div className="flex flex-col gap-3 p-3">
                        <h2 className="text-2xl font-semibold">
                            List of Invoices
                        </h2>

                        <p className="text-sm max-w-xl">
                            Introducing our interactive symptom assessment and
                            questioning feature, which leverages AI technology
                            to enhance the information -gathering process.
                        </p>
                    </div>

                    <img
                        src={i1}
                        alt="invoice"
                        className="h-44 w-auto object-cover"
                    />
                </div>
            </div>

            {/* React Table */}
            <PInvoiceTable />
        </div>
    );
};

export default PInvoiceHero;
