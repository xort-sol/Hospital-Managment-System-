import React, { FC, useState } from "react";
// import { useDispatch } from "react-redux";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import emailjs from "@emailjs/browser";
import { ReusableButton, ReusableInputField } from "../../utils/Components";

import vicons from "../../../assets/signup/icons/v.png";

//

// importing flag
import usa from "../../../assets/flag/us.png";
import brazilf from "../../../assets/flag/brazil-.png";
import canada from "../../../assets/flag/canada.png";
import { useDispatch } from "react-redux";
import {
    signupDecrement,
    signupIncrement,
} from "../../../redux/features/signup/signupSlice";

// Email Input props

interface EmailInputProps {
    setTab: (tab: number) => void;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setVerificationCode: React.Dispatch<React.SetStateAction<string>>;
}


const EmailPasswordInput: FC<EmailInputProps> = ({ setTab , email, setEmail,password,setPassword,setVerificationCode}) => {
    const dispatch = useDispatch();

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };
    

    const generateOTP = () => {
        console.log('generating otp');
      const otpLength = 6;
      const otp = Array.from({ length: otpLength }, () => Math.floor(Math.random() * 10)).join('');
      window.alert("otp -->"+otp);
      return otp;
    };
    
    const sendEmail = (toEmail: string, ootp: string) => {
        console.log('sending Email');
      emailjs
        .send(
          'service_de44bpy',
          'template_3xt6y1s',
          {
            to_email: toEmail,
            message: ootp,
          },
          'SrcEchM4gi64FxEp_'
        )
        .then(
          () => {
            alert("Verification Code has been sent to your Email");
          },
          (error: any) => {
            alert("Ahh, something went wrong. Please try again.");
            console.error("Error sending email:", error.message);
          }
        );
    };
    
    const handleEmailPasswordSubmit = (e: any) => {
        e.preventDefault();
        console.log("Email and Password Submited");
        const otp = generateOTP();
        setVerificationCode(otp);
        sendEmail(email,otp);


        setTab(3);
    };



    const handleBackClick = () => {
        dispatch(signupDecrement());
    };


    return (
        <form
            onSubmit={handleEmailPasswordSubmit}
            className="w-3/5 h-full flex flex-col justify-center items-center gap-5"
        >
            <ReusableInputField
                label="Email"
                htmlfor="email"
                type="email"
                required={true}
                placeholder="Enter Your Email"
                onChange={handleEmailChange}
                value={email}
                customeStyle="p-3"
                labelStyle="font-bold text-sm m-2"
                parentDivStyle="w-full"
            />
            <ReusableInputField
                label="Password"
                htmlfor="Password"
                type="password"
                required={true}
                placeholder="Enter Your Password"
                onChange={handlePasswordChange}
                value={password}
                customeStyle="p-3"
                labelStyle="font-bold text-sm m-2"
                parentDivStyle="w-full"
            />

            <p className="text-sm text-gray_color my-5">
                You will receive a unique member number that includes a country
                code and a 6-digit unique number. This member number serves as
                your identification within the app and ensures a personalized
                experience.
            </p>

            <div className="flex w-full justify-center items-center gap-10">
                <ReusableButton
                    label="Back"
                    onClick={handleBackClick}
                    customeStyle="bg-gray_color text-white my-5"
                />

                <ReusableButton
                    type="submit"
                    label="Submit"
                    customeStyle="bg-blue_color text-white my-5"
                />
            </div>
        </form>
    );
};

interface PhoneNumberPasswordInputProps {
    setTab: (tab: number) => void;
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    selectedCountry: { value: string; label: string; flag: string };
    setSelectedCountry: React.Dispatch<React.SetStateAction<{ value: string; label: string; flag: string }>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}
// Phone Number Input
const PhoneNumberPasswordInput: FC<PhoneNumberPasswordInputProps> = ({ setTab ,phoneNumber,setPhoneNumber,selectedCountry,setSelectedCountry,password,setPassword}) => {
    const dispatch = useDispatch();
    
    const countryOptions = [
        { value: "1", label: "USA (+1)", flag: usa },
        { value: "1", label: "Canada (+1)", flag: canada },
        { value: "55", label: "Brazil (+55)", flag: brazilf },
        // Add more countries as needed
    ];



    const handleBackClick = () => {
        dispatch(signupDecrement());
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPhoneNumber(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };



    const handlePhoneNumberPasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Phonenumber Password Submitted");
        console.log("Selected Country:");
        console.log("Phone Number:");
        setTab(3);
    };

    const handleCountryChange = (selectedOption: any) => {
        setSelectedCountry(selectedOption);
    };

    return (
        <form
            onSubmit={handlePhoneNumberPasswordSubmit}
            className="w-3/5 h-full flex flex-col justify-center items-center gap-5 mt-8"
        >
            <div className="flex w-3/4 justify-start items-center p-1 border rounded-full min-h-[40px]">
                {/* Country Code Select */}
                <div className="relative inline-block w-40">
                    <div className="w-full bg-white  rounded-full">
                        <div
                            className="flex items-center justify-between cursor-pointer "
                            onClick={() => {
                                document
                                    .getElementById("country-options")
                                    ?.classList.toggle("hidden");
                            }}
                        >
                            <div>
                                {selectedCountry ? (
                                    <div className="flex w-36  justify-start items-center gap-2">
                                        <img
                                            src={selectedCountry?.flag}
                                            alt="country"
                                            className="h-10 w-10 object-cover"
                                        />

                                        <p>{selectedCountry?.label}</p>
                                    </div>
                                ) : (
                                    <span>Select Country Code</span>
                                )}
                            </div>
                            <div className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        id="country-options"
                        className="hidden absolute w-60 h-58 overflow-y-auto  bg-white border border-gray-300 rounded-lg shadow-lg"
                    >
                        {countryOptions.map((option, index) => (
                            <div
                                key={index}
                                className="cursor-pointer p-4 hover:bg-blue-100 flex items-center justify-start gap-1 "
                                onClick={() => {
                                    handleCountryChange(option);
                                    document
                                        .getElementById("country-options")
                                        ?.classList.add("hidden");
                                }}
                            >
                                <img
                                    src={option.flag}
                                    alt="country"
                                    className="h-10 w-10 object-cover"
                                />{" "}
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Phone Number Input */}
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter Phone Number"
                    className="p-3 rounded-full w-full"
                />

                

            </div>
            <ReusableInputField
                label="Password"
                htmlfor="Password"
                type="password"
                required={true}
                placeholder="Enter Your Password"
                onChange={handlePasswordChange}
                value={password}
                customeStyle="p-3"
                labelStyle="font-bold text-sm m-2"
                parentDivStyle="w-full"
            />

            <p className="text-sm  text-gray-600 my-5">
                You will receive a unique member number that includes a country
                code and a 6-digit unique number. This member number serves as
                your identification within the app and ensures a personalized
                experience.
            </p>

            <div className="flex w-full justify-center items-center gap-10">
                <ReusableButton
                    label="Back"
                    onClick={handleBackClick}
                    customeStyle="bg-gray_color text-white my-5"
                />

                <ReusableButton
                    type="submit"
                    label="Submit"
                    customeStyle="bg-blue_color text-white my-5"
                />
            </div>
        </form>
    );
};

// Verify Acount
const VerifyAccount: FC<any> = ({ setTab, email, phoneNumber,password,verificationCode,accountType}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // const dispatch = useDispatch();


    // Will add later

    // const handleGoBack = () => {
    //     if (inputMethod === "phone") {
    //         setTab(1); // Go back to the phone number input
    //     } else {
    //         setTab(0); // Go back to the email input
    //     }
    // };

    const handleGoBack = () => {
        setTab(0);
    };
    const [otp, setOtp] = useState("");
    const handleVerifyChange = (e: any) => {
        setOtp(e.target.value);
    };
    
    const handleVerifySubmit = async (e: any) => {
        e.preventDefault();

        try {
            if (verificationCode === otp) {
                // Verification successful
                window.alert("Verification successful");

                // Fetch the data needed for user registration
                const registrationData = {
                    email: email, // replace with actual email
                    password: password, // replace with actual password
                    phoneNumber: phoneNumber, // replace with actual phone number
                    userType: accountType, // replace with actual user type
                };

                // Call your register API endpoint
                const response = await fetch('http://localhost:5000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(registrationData),
                });

                if (response.ok) {
                    // Registration successful
                    const data = await response.json();
                    console.log('User registered:', data);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('id', data.id);
                    localStorage.setItem('userType', data.userType);
                    localStorage.setItem('memberShipCode', data.MemberShipCode);
                    // Handle the next step in your logic, e.g., redirect to dashboard

                    if(data.userType == "ambulance" )
                    {
                        console.log("going to ambulance index");
                        navigate('/ambulance/addpatient/', { replace: true });
                    }
                    
                    dispatch(signupIncrement());
                    
                } else {
                    // Handle registration error
                    console.error('Registration failed:', response.status);
                    window.alert('Registration failed. Please try again.');
                }   
            } else {
                console.error("Incorrect verification code");
                window.alert("Incorrect verification code");
            }
        } catch (error: any) {
            // Handle network errors or other exceptions
            console.error("Error:", error.message);
            window.alert("An error occurred. Please try again.");
        }
    };
    


    return (
        <div className="w-full h-full ">
            <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                <img src={vicons} alt="verify" className="h-40 w-auto" />

                <form
                    onSubmit={handleVerifySubmit}
                    className="w-3/5 h-full flex flex-col justify-center items-center gap-5"
                >
                    <ReusableInputField
                        label="Verification Code"
                        htmlfor="otp"
                        type="password"
                        required={true}
                        onChange={handleVerifyChange}
                        value={otp}
                        customeStyle="p-3 text-xl font-bold text-center tracking-[2rem]"
                        labelStyle="font-bold text-sm m-2"
                        parentDivStyle="w-full"
                    />

                    <p className="text-sm text-gray_color my-5">
                        You will receive a unique member number that includes a
                        country code and a 6-digit unique number. This member
                        number serves as your identification within the app and
                        ensures a personalized experience.
                    </p>

                    <div className="flex w-full justify-center items-center gap-10">
                        <ReusableButton
                            label="Back"
                            onClick={handleGoBack}
                            customeStyle="bg-gray_color text-white my-5"
                        />

                        <ReusableButton
                            type="submit"
                            label="Verify"
                            customeStyle="bg-blue_color text-white my-5"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

// Main Account Verification
const AccountVerification : FC<any> = ({accountType}) => {
    const [tab, setTab] = useState(0);

    const handleTabSwitch = (index: number) => {
        setTab(index);
    };

    const [email, setEmail] = useState("");
    const [password,setPassword]  = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    //selected country
    const [selectedCountry, setSelectedCountry] = useState({
        value: "0",
        label: "USA (+1)",
        flag: usa,
    });

    const [otp,setOtp]=useState("");
    

    return (
        <div className="h-full w-full">
            <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                {/* Tab */}
                {tab !== 3 && (
                    <div className="w-auto rounded-full text-blue_color h-full my-2 p-1 bg-sky_color">
                        <ReusableButton
                            label="Email"
                            onClick={() => handleTabSwitch(0)}
                            customeStyle={
                                tab === 0
                                    ? "bg-white text-blue_color w-80 shadow shadow-lg"
                                    : "bg-sky_color text-gray_color w-80"
                            }
                        />
                        <ReusableButton
                            label="Phone Number"
                            onClick={() => handleTabSwitch(1)}
                            customeStyle={
                                tab === 1
                                    ? "bg-white text-blue_color w-80 shadow shadow-lg"
                                    : "bg-sky_color text-gray_color w-80"
                            }
                        />
                    </div>
                )}
                {/* Tab Content  */
                }



                
                <div className="w-full h-full flex justify-center items-center">
                    {tab === 0 && <EmailPasswordInput  setTab={setTab} email={email} setEmail={setEmail}  password={password} setPassword={setPassword} setVerificationCode={setOtp}/> }
                    {tab === 1 && <PhoneNumberPasswordInput  setTab={setTab}  phoneNumber={phoneNumber}  setPhoneNumber={setPhoneNumber} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}  password={password} setPassword={setPassword}/>}
                    {tab === 3 && <VerifyAccount setTab={setTab} email={email} phoneNumber={phoneNumber}  password={password} verificationCode={otp} accountType={accountType} />}
                </div>
            </div>
        </div>
    );
};

export default AccountVerification;
