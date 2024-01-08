import { ChangeEvent, FC } from "react";
import {
    ReusableButtonProps,
    ReusableInputFieldProps,
    ReusableSelectFieldProps,
} from "../types/typesGlobal";

// Buttons

export const ReusableButton: FC<ReusableButtonProps> = ({
    type = "button",
    label,
    onClick,
    customeStyle,
}) => {
    return (
        <button
            type={type}
            className={`${customeStyle} min-w-[10rem] px-5 py-2 font-semibold rounded-full`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

// Select Field

export const ReusableSelectField: FC<ReusableSelectFieldProps> = ({
    label,
    value,
    htmlfor,
    options,
    onChange,
    customeStyle,
    labelStyle,
    required,
    parentDivStyle,
}) => {
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e);
    };

    return (
        <div className={`${parentDivStyle} flex flex-col gap-2`}>
            <label htmlFor={htmlfor} className={`${labelStyle}`}>
                {label}
            </label>
            <select
                id={htmlfor}
                required={required ?? false}
                name={htmlfor}
                value={value || ""}
                onChange={handleSelectChange}
                className={`${customeStyle}  rounded-full select_arrow_dropdown border-[#455A64] border`}
            >
                <option value="" disabled hidden>
                    Select an option
                </option>

                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

// input fills
export const ReusableInputField: FC<ReusableInputFieldProps> = ({
    label,
    id,
    value,
    onChange,
    type = "text",
    placeholder,
    customeStyle,
    labelStyle,
    htmlfor,
    required,
    parentDivStyle,
}) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };

    return (
        <div className={`${parentDivStyle} flex flex-col gap-1`}>
            <label htmlFor={htmlfor} className={`${labelStyle}`}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                required={required ?? false}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={`${customeStyle} rounded-full  border-[#455A64] border`}
            />
        </div>
    );
};
