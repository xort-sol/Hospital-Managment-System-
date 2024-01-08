import { FC } from "react";

type Props = {
    item?: any;
};

import r1 from "../../../../../assets/dashboardIcons/p/r1.png";

const PChatMessage: FC<Props> = ({ item }) => {
    return (
        // <ScrollBarFeed>
        <div className="w-full h-fit my-2">
            <div
                className={`flex gap-2 w-full h-full ${
                    item.user === "Me"
                        ? " justify-end items-end"
                        : " justify-start items-start"
                }`}
            >
                {item.user === "gpt" && (
                    <div
                        className={`w-14 h-14 rounded-full flex justify-center items-center p-1 bg-white`}
                    >
                        <img
                            src={r1}
                            alt="robot"
                            className="h-10 w-auto object-cover"
                        />
                    </div>
                )}

                <p
                    className={`py-2  rounded-lg   px-4 text-sm ${
                        item.user === "Me"
                            ? "  rounded-tr-none bg-blue-400 text-white"
                            : "rounded-bl-none bg-white text-black"
                    } `}
                >
                    {item.message}
                </p>
            </div>
        </div>
    );
};

export default PChatMessage;
