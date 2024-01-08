import React from "react";

import PChatBoxContacts from "../Patient/PatientDBComponents/PChatBox/PChatBoxContacts";

type Props = {};

const AmbulanceChatBox: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            <PChatBoxContacts />
        </div>
    );
};
export default AmbulanceChatBox;
