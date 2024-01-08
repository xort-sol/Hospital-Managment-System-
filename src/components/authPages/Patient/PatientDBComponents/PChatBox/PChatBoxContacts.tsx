import { FC } from "react";

import { Link } from "react-router-dom";

type Props = {};

const  PChatBoxContacts: FC<Props> = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex flex-col justify-center items-center  gap-2 p-5">
                <Link
                    to={"/patient/chatbox/ai"}
                    className="w-full h-20 flex justify-start items-center gap-5 p-2 hover:bg-slate-200 duration-200 rounded-md cursor-pointer"
                >
                    {/* avatar */}
                    <div className="w-auto h-auto flex justify-center items-center">
                        <img
                            src="https://static.botsrv2.com/website/img/quriobot_favicon.1727b193.png"
                            alt="bot"
                            className="h-16 w-16 object-cover rounded-full"
                        />
                    </div>

                    {/* name & message */}
                    <div className="flex flex-col gap-2">
                        <h1 className="w-full line-clamp-1 text-sm font-semibold">
                            Meidi AI Robot
                        </h1>

                        <p className="w-full line-clamp-1 text-sm font-light">
                            Helllo how can i help
                        </p>
                    </div>
                </Link>

                <Link
                    to={"/patient/chatbox/jhon"}
                    className="w-full h-20 flex justify-start items-center gap-5 p-2 hover:bg-slate-200 duration-200 rounded-md cursor-pointer"
                >
                    {/* avatar */}
                    <div className="w-auto h-auto flex justify-center items-center">
                        <img
                            src="https://i.pinimg.com/originals/20/7d/70/207d706ebae606ab222fd707a07d04e0.jpg"
                            alt="bot"
                            className="h-16 w-16 object-cover rounded-full"
                        />
                    </div>

                    {/* name & message */}
                    <div className="flex flex-col gap-2">
                        <h1 className="w-full line-clamp-1 text-sm font-semibold">
                            Doctor Joey Tribiani
                        </h1>

                        <p className="w-full line-clamp-1 text-sm font-light">
                            How you doin?
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default PChatBoxContacts;
