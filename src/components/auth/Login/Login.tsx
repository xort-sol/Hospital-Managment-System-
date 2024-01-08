import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import usa from "../../../assets/flag/us.png"; // Replace with the correct path to your flag images
import canada from "../../../assets/flag/canada.png";
import brazil from "../../../assets/flag/brazil-.png";
import { ReusableButton } from "../../utils/Components";
import { changerole } from "../../../redux/features/auth/authSlice";

const countryOptions = [
    { value: "+1", label: "USA (+1)", flag: usa },
    { value: "+1", label: "Canada (+1)", flag: canada },
    { value: "+55", label: "Brazil (+55)", flag: brazil },
    // Add more countries as needed
];

const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState({
        value: "0",
        label: "USA (+1)",
        flag: usa,
    });
    const handleLogin = async () => {
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Phone Number:", selectedCountry.value + phoneNumber);
        
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Login successful
                console.log('Login successful:', data);
    
                // Save the token to localStorage or state as needed
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', data.id);
                localStorage.setItem('memberShipCode',data.memberShipCode)
                localStorage.setItem('userType', data.role);

                if(data.role == "patient")
                {
                    dispatch(changerole("patient"));
                    navigate("/patient/dashboard");
                }
                else if(data.role == "ambulance")
                {
                    dispatch(changerole("ambulance"));
                    navigate("/ambulance/dashboard");
                }
                else if(data.role == "doctor")
                {
                    dispatch(changerole("doctor"));
                    navigate("/doctor/dashboard");
                }
                else if(data.role == "hospital")
                {
                    dispatch(changerole("hospital"));
                    navigate("/hospital/addpatient")
                }
                else{
                    
                }
    
                // Redirect to the desired page or perform other actions
                // Example: window.location.href = '/dashboard';
            } else {
                // Login failed
                console.error('Login failed:', data.msg);
                // Handle the error, display a message, etc.
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error:', error.message);
            // Display an error message to the user
        }
    };
    
    const [tab, setTab] = useState(0);

    const handleTabSwitch = (index: number) => {
        setTab(index);
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPhoneNumber(e.target.value);
    };

    const handleCountryChange = (selectedOption: any) => {
        setSelectedCountry(selectedOption);
    };

    return (
        <section className="w-full h-full signup_background min-h-screen">
            <div className="w-full h-full ">
                <div className="w-full h-screen  flex flex-col justify-center items-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-blue_color text-center">
                        Login
                    </h2>

                    <div className="w-full h-auto my-10 flex flex-col justify-center items-center gap-5">
                        <div className="w-auto rounded-full text-blue_color h-auto my-2 p-1 bg-sky_color">
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
                    </div>

                    <form className="w-5/6 md:w-2/5">
                        {tab === 0 && (
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-blue_color text-sm font-bold mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border border- rounded-full"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        )}

                        {tab === 1 && (
                            <div className="mb-4">
                                <label
                                    htmlFor="phonenumber"
                                    className="block text-blue_color text-sm font-bold mb-2"
                                >
                                    Phone Number
                                </label>
                                <div className="flex w-full justify-start items-center p-1 border rounded-full">
                                    <div className="relative inline-block w-72">
                                        <div className="w-full bg-white rounded-full">
                                            <div
                                                className="flex items-center justify-between cursor-pointer border-r"
                                                onClick={() => {
                                                    document
                                                        .getElementById(
                                                            "country-options"
                                                        )
                                                        ?.classList.toggle(
                                                            "hidden"
                                                        );
                                                }}
                                            >
                                                <div>
                                                    {selectedCountry ? (
                                                        <div className="flex w-36  justify-start items-center gap-2">
                                                            <img
                                                                src={
                                                                    selectedCountry?.flag
                                                                }
                                                                alt="country"
                                                                className="h-8 w-8 object-cover"
                                                            />
                                                            <p>
                                                                {
                                                                    selectedCountry?.label
                                                                }
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        <span>
                                                            Select Country Code
                                                        </span>
                                                    )}
                                                </div>
                                                <div className=" absolute right-2">
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
                                            {countryOptions.map(
                                                (option, index) => (
                                                    <div
                                                        key={index}
                                                        className="cursor-pointer p-4 hover:bg-blue-100 flex items-center justify-start gap-1 "
                                                        onClick={() => {
                                                            handleCountryChange(
                                                                option
                                                            );
                                                            document
                                                                .getElementById(
                                                                    "country-options"
                                                                )
                                                                ?.classList.add(
                                                                    "hidden"
                                                                );
                                                        }}
                                                    >
                                                        <img
                                                            src={option.flag}
                                                            alt="country"
                                                            className="h-8 w-8 object-cover"
                                                        />{" "}
                                                        {option.label}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        placeholder="Enter Phone Number"
                                        className="p-2  w-full ml-2"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-blue_color text-sm font-bold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-3 border rounded-full"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <Link
                                to="/forgot-password"
                                className="text-blue_color hover:underline text-xs"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-blue_color text-white p-2 rounded hover:bg-blue_color_dark"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-8">
                        <p className="text-center">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-blue_color hover:underline"
                            >
                                Register here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
