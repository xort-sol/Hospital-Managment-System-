import { FC, useState } from "react";

// icons
import ci1 from "../../../../../assets/dashboardIcons/h/ci1.png";
import ci2 from "../../../../../assets/dashboardIcons/h/ci2.png";
import ci3 from "../../../../../assets/dashboardIcons/h/ci3.png";
import ci4 from "../../../../../assets/dashboardIcons/h/ci4.png";
import ci5 from "../../../../../assets/dashboardIcons/h/ci5.png";
import ci6 from "../../../../../assets/dashboardIcons/h/ci6.png";
import ci7 from "../../../../../assets/dashboardIcons/h/ci7.png";
import ci8 from "../../../../../assets/dashboardIcons/h/ci8.png";
import { toast } from "react-toastify";
import { ReusableButton } from "../../../../utils/Components";
import { AiFillPlusCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

type Props = {};

const HCreateInvoice: FC<Props> = () => {
    const categories = [
        {
            id: "MedicalService",
            name: "Medical Service",
            icons: ci1,
        },

        {
            id: "RoomandBoard",
            name: "Room & Board",
            icons: ci2,
        },
        {
            id: "ProceduresandTreatments",
            name: "Procedures & Treatments",
            icons: ci3,
        },

        {
            id: "MiscellaneousCharges",
            name: "Miscellaneous Charges",
            icons: ci4,
        },
        {
            id: "InsuranceandCoPayments",
            name: "Insurance & Co-Payments",
            icons: ci5,
        },
        {
            id: "DiscountsandAdjustments",
            name: "Discounts & Adjustments",
            icons: ci6,
        },

        {
            id: "Taxes",
            name: "Taxes",
            icons: ci7,
        },
        {
            id: "TotalCharges",
            name: "Total Charges",
            icons: ci8,
        },
    ];

    const servicesData: any = {
        MedicalService: [
            { name: "Consultation Fees" },
            { name: "MedicalService B" },
            { name: "MedicalService C" },
        ],
        RoomandBoard: [
            { name: "RoomandBoard X" },
            { name: "RoomandBoard Y" },
            { name: "RoomandBoard Z" },
        ],
        ProceduresandTreatments: [
            { name: "ProceduresandTreatments 1" },
            { name: "ProceduresandTreatments 2" },
        ],

        MiscellaneousCharges: [
            { name: "MiscellaneousCharges 1" },
            { name: "MiscellaneousCharges 2" },
        ],

        InsuranceandCoPayments: [
            { name: "InsuranceandCoPayments 1" },
            { name: "InsuranceandCoPayments 2" },
        ],

        DiscountsandAdjustments: [
            { name: "DiscountsandAdjustments 1" },
            { name: "DiscountsandAdjustments 2" },
        ],

        Taxes: [{ name: "Taxes 1" }, { name: "Taxes 2" }],

        TotalCharges: [{ name: "TotalCharges 1" }, { name: "TotalCharges 2" }],
    };

    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedServiceName, setSelectedServiceName] = useState<string>("");
    const [selectedServicePrice, setSelectedServicePrice] = useState<number>();
    const [invoiceItems, setInvoiceItems] = useState<any[]>([]);

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setSelectedService(null);
        setSelectedServiceName("");
        setSelectedServicePrice(0);
    };

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const serviceName = e.target.value;
        setSelectedServiceName(serviceName);
        setSelectedService(serviceName);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedServicePrice(parseFloat(e.target.value));
    };

    const handleAddMore = () => {
        if (!selectedService) {
            return toast.error("Please select a service");
        }

        if (selectedService) {
            const newItem = {
                name: selectedServiceName,
                price: selectedServicePrice,
                qty: 1,
            };
            setInvoiceItems([...invoiceItems, newItem]);
        }
    };

    // Remove items from invouce list

    const handleRemoveItem = (index: number) => {
        const updatedItems = [...invoiceItems];
        updatedItems.splice(index, 1);
        setInvoiceItems(updatedItems);
    };

    return (
        <div className="w-full h-full flex flex-col gap-10 mb-10 justify-center items-center ">
            <div className="w-full my-5 flex flex-col justify-start items-start gap-5 p-5 text-blue_color">
                <h1 className="font-bold text-3xl">Create New Invoice</h1>

                <p className="text-sm font-normal">
                    Lorem ipsum dolor sit amet, consectetur adi elit, sed do
                    eiusmod. Lorem ipsum dolor sit amet,{" "}
                </p>
            </div>

            {/*  */}

            <div className="w-full h-full  flex flex-col gap-10 justify-center items-center p-5">
                {/* Boxs */}

                <div className="w-full h-full  grid grid-cols-4 justify-items-center gap-10">
                    {categories?.map((category: any, index: number) => (
                        <div
                            onClick={() => handleCategoryChange(category.id)}
                            key={index}
                            className={`w-full h-full flex flex-col rounded-lg shadow-md cursor-pointer bg-white p-5 justify-center items-center gap-5 duration-200 ${
                                selectedCategory === category.id
                                    ? "border-2 border-blue_color"
                                    : "border-2 border-transparent"
                            }`}
                        >
                            <img
                                src={category.icons}
                                alt={category.name}
                                className="w-16 h-16 object-cover"
                            />
                            <p className="text-sm font-semibold">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>

                <div className=" w-full h-full flex flex-col gap-5">
                    <h1 className="font-semibold text-xl ">
                        Choose Sub-Category
                    </h1>

                    <div className=" w-full flex justify-start gap-5 items-end">
                        <div className="flex w-4/6 flex-col justify-start items-start gap-2">
                            <label htmlFor="serviceSelect">
                                Select a Service:
                            </label>
                            <select
                                id="serviceSelect"
                                onChange={(e) => handleServiceChange(e)}
                                value={selectedServiceName}
                                className="w-full py-2 px-4 rounded-full select_arrow_dropdown"
                            >
                                {!selectedCategory && (
                                    <option value={""}>
                                        Please select a category
                                    </option>
                                )}

                                {selectedCategory && (
                                    <option value={""}>Select a service</option>
                                )}

                                {servicesData[selectedCategory]?.map(
                                    (service: any, index: number) => (
                                        <option
                                            key={index}
                                            value={service.name}
                                        >
                                            {service.name}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <div className="flex w-1/6  flex-col justify-start items-start gap-2">
                            <label htmlFor="priceInput">Cost</label>
                            <input
                                id="priceInput"
                                type="number"
                                value={selectedServicePrice}
                                onChange={(e) => handlePriceChange(e)}
                                className="w-full py-2 px-4 rounded-full appearance-none"
                            />
                        </div>

                        {/* button to add more */}

                        <button
                            onClick={handleAddMore}
                            className=" text-blue_color p-1  rounded-full flex justify-center items-center text-4xl"
                        >
                            <AiFillPlusCircle />
                        </button>
                    </div>

                    <div className=" w-full h-full flex flex-col gap-5">
                        <h1 className="font-semibold text-2xl text-blue_color">
                            Total
                        </h1>
                        {invoiceItems?.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="flex justify-start items-center gap-2 w-full"
                            >
                                <button onClick={() => handleRemoveItem(index)}>
                                    <RxCross2 className="text-lg text-red-400 hover:text-red-600 duration-200" />
                                </button>

                                <div className="flex text-blue_color font-normal text-lg w-9/12 justify-between items-center">
                                    <p>{item.name} </p>

                                    <p>${item?.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-8/12 h-full my-5 flex justify-between items-center">
                    <ReusableButton
                        label="Cancel"
                        customeStyle=" bg-gray_color text-white hover:bg-slate-900 duration-200"
                        onClick={() => setInvoiceItems([])}
                    />

                    <ReusableButton
                        label="Generate"
                        customeStyle=" bg-red-400 text-white hover:bg-red-600 duration-200"
                        onClick={() => console.log(invoiceItems)}
                    />
                </div>
            </div>
        </div>
    );
};

export default HCreateInvoice;
