import { FC, useState } from "react";
import { showAddPatientModal } from "../../../../../redux/features/hospital/hospitalSlice";
import {
    ReusableButton,
    ReusableInputField,
} from "../../../../utils/Components";
import { useDispatch } from "react-redux";

type Props = {};

const HConnectWithPatient: FC<Props> = () => {
    const dispatch = useDispatch();

    const [UniqueIdentificationNumber, setUniqueIdentificationNumber] = useState("");

    // Will add later

    // const handleGoBack = () => {
    //     if (inputMethod === "phone") {
    //         setTab(1); // Go back to the phone number input
    //     } else {
    //         setTab(0); // Go back to the email input
    //     }
    // };

    const handleVerifyChange = (e: any) => {
        setUniqueIdentificationNumber(e.target.value);
    };

    const handleVerifySubmit = (e: any) => {
        e.preventDefault();
        console.log("Submited");
        setUniqueIdentificationNumber("");
        dispatch(showAddPatientModal());
    };
    const handleClick = async () => {
      
      
        // Assuming you have the hospital membership code stored in local storage
        const hospitalMemberShipCode = "1025";
      
        if (!hospitalMemberShipCode) {
          console.error("Hospital membership code not found in local storage");
          return;
        }
      
        try {
          // You can replace the hardcoded patient membership code with your logic to get it
          const patientMemberShipCode = UniqueIdentificationNumber; // Replace with your logic to get the patient code
          window.alert("heelo");
          const response = await fetch(`http://localhost:5000/hospital/addPatient/${patientMemberShipCode}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              memberShipCode: hospitalMemberShipCode,
            }),
          });
      
          if (response.ok) {
            const result = await response.json();
            window.alert("patient added successfully")
            console.log("Submited");
            setUniqueIdentificationNumber("");
            
            console.log(result.message);
          } else {
            const error = await response.json();
            console.error(`Failed to add patient: ${error.error}`);
          }
        } catch (error) {
          console.error("Error adding patient:", error);
        }
      };
      

    return (
        <div className="w-full h-full my-8 ">
            <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                <form
                    onSubmit={handleVerifySubmit}
                    className="w-4/5 h-full flex flex-col justify-center items-center gap-5"
                >
                    <ReusableInputField
                        label="Unique identification number"
                        htmlfor="password"
                        type="password"
                        required={true}
                        onChange={handleVerifyChange}
                        value={UniqueIdentificationNumber}
                        customeStyle="p-3 text-xl font-bold text-center tracking-[2rem]"
                        labelStyle="font-bold text-lg m-2"
                        parentDivStyle="w-full"
                    />

                    <p className="text-sm text-gray_color my-5">
                        You will receive a unique member number that includes a
                        country code and a 6-digit unique number.
                    </p>

                    <div className="flex w-full justify-center items-center gap-10">
                        <ReusableButton
                            label="Cancel"
                            onClick={() => setUniqueIdentificationNumber("")}
                            customeStyle="bg-gray_color text-white my-5"
                        />

                        <ReusableButton
                            type="submit"
                            label="Connect"
                            onClick={() => handleClick()}
                            customeStyle="bg-red-400 text-white my-5"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HConnectWithPatient;
