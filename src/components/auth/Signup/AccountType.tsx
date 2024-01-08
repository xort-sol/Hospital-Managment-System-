import React from "react";
import p1 from "../../../assets/signup/icons/p1.png";
import h1 from "../../../assets/signup/icons/h1.png";
import a1 from "../../../assets/signup/icons/a1.png";
import { ReusableButton } from "../../utils/Components";
import { useDispatch } from "react-redux";
import { signupIncrement } from "../../../redux/features/signup/signupSlice";
import { toast } from "react-toastify";

type AccountTypeOption = {
    type: string;
    image: any;
    title: string;
};

type Props = {
    accountType: string;
    setAccountType: (accountType: string) => void;
};

const AccountType: React.FC<Props> = ({ accountType, setAccountType }) => {
    const dispatch = useDispatch();

    const handleNextClick = () => {
        if (!accountType || accountType === "") {
            return toast.error("Please select an account type");
        }
        dispatch(signupIncrement());
    };

    // Define account type options
    const accountTypeOptions: AccountTypeOption[] = [
        {
            type: "patient",
            image: p1,
            title: "Patient",
        },
        {
            type: "hospital",
            image: h1,
            title: "Hospital",
        },
        {
            type: "ambulance",
            image: a1,
            title: "Ambulance",
        },
    ];

    return (
        <div className="w-full h-full">
            <div className="flex justify-center gap-10 w-full">
                {accountTypeOptions.map((option) => (
                    <div
                        key={option.type}
                        className={` p-5  cursor-pointer rounded-md border-2 flex flex-col justify-center items-center duration-200 gap-3 min-w-[200px] ${
                            accountType === option.type
                                ? "border-blue_color text-blue_color"
                                : "border-gray-300 text-slate-600"
                        }`}
                        onClick={() => setAccountType(option.type)}
                    >
                        <img src={option.image} alt={option.title} />
                        <h3 className="text-lg font-bold">{option.title}</h3>
                    </div>
                ))}
            </div>

            <div className="mt-10 w-full flex justify-center items-center gap-5">
                <ReusableButton
                    label="Next"
                    onClick={handleNextClick}
                    customeStyle="bg-blue_color hover:bg-blue_color_dark duration-200 text-[#fff]"
                />
            </div>
        </div>
    );
};

export default AccountType;
