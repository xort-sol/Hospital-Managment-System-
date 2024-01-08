import React from "react";
import PChatBoxContacts from "./PatientDBComponents/PChatBox/PChatBoxContacts";

type Props = {};

const PatientChatBox: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}

            <PChatBoxContacts />
        </div>
    );
};

export default PatientChatBox;
