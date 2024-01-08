export interface IPatient {
    email?: string;
    password?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: number;
    gender: string;
    country: string;
    address: string;
    phoneNumber?: string;
    passportNumber?: string;
    travelsReasons?: string;
    dateOfTravel?: string;
    travelLocation?: string;
}

export interface IHospital {
    name: string;
    location: string;
    // Add other hospital-specific fields here
}

export interface IAmbulance {
    // Define ambulance-specific fields here
}

export interface ISignupData {
    accountType: "patient" | "hospital" | "ambulance";
    patientData?: IPatient;
    hospitalData?: IHospital;
    ambulanceData?: IAmbulance;
}

export interface ISignupState {
    activeNumber: number;
    signupData: ISignupData;
}
