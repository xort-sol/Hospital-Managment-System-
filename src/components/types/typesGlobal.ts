// ###############################
// ###############################
// ###############################

// ResuableButtonComponent
export interface ReusableButtonProps {
    type?: "button" | "submit" | "reset";
    label: string;
    onClick?: () => void;
    customeStyle?: string;
}

// ###############################

// Selete Field Component
export interface IInputSeletcOption {
    value: string;
    label: string;
}

export interface ReusableSelectFieldProps {
    label: string;
    value: string;
    options: IInputSeletcOption[];
    onChange: any;
    customeStyle?: string;
    labelStyle?: string;
    htmlfor: string;
    required?: boolean;
    parentDivStyle?: string;
}

// input

export interface ReusableInputFieldProps {
    label: string;
    value: string;
    onChange: any;
    type?: string;
    placeholder?: string;
    customeStyle?: string;
    labelStyle?: string;
    parentDivStyle?: string;
    htmlfor: string;
    required?: boolean;
    id?: string;
}

// ###############################
// ###############################
// ###############################
