import { FC, useState } from "react";
import r1 from "../../../../../assets/dashboardIcons/p/r1.png";
import { useDispatch, useSelector } from "react-redux";
import ScrollBarFeed from "react-scrollable-feed";
import PChatMessage from "./PChatMessage";
import { GrSend } from "react-icons/gr";
import "./PChatBox.css";
import { messageToChatbot } from "../../../../../redux/features/patient/patientSlice";

type Props = {};

const PChatBoxHero: FC<Props> = () => {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const { chatBotAi } = useSelector((state: any) => state.patient);

    console.log(chatBotAi);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (inputText.trim() === "") return; // Prevent submitting empty messages
        // Dispatch the userChat action to update the chat log in Redux
        dispatch(messageToChatbot(inputText));
        setLoading(true);

        // try {
        //     // Make the API request to the backend
        //     const response = await fetch(
        //         "http://137.184.145.96:8080/api/v1/ask",
        //         {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify({
        //                 question: inputText, // Send the inputText as the 'question' field
        //             }),
        //         }
        //     );

        //     // Parse the response as JSON
        //     const data = await response.json();

        //     // Dispatch the getApiChatData action to update the chat log with the API response
        //     dispatch(getApiChatData(data.message));
        //     setLoading(false);
        // } catch (error) {
        //     console.log(error);
        //     setLoading(false);
        // }

        setInputText(""); // Clear the input field after sending the message
    };

    // const handleKeyDown = (event: any) => {
    //     if (event.key === "Enter" && !event.shiftKey) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         handleSubmit(event);
    //     }
    // };

    const handleInputChange = (e: any) => {
        setInputText(e.target.value);
    };

    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex flex-col  gap-2 p-5">
                {/* <div className="w-full flex justify-start items-center mb-4">
                    <button
                        className="flex justify-start items-center  p-2 rounded-md bg-white shadow"
                        onClick={() => dispatch(showAllContacts())}
                    >
                        <IoChevronBack className="text-xl text-blue_color" />
                    </button>
                </div> */}
                {/* Header */}

                <div className="flex w-full h-auto justify-start items-center gap-5">
                    <div className="h-20 w-20 rounded-full flex justify-center items-center bg-white">
                        <img
                            src={r1}
                            alt="robot"
                            className="h-auto w-16 object-cover"
                        />
                    </div>

                    <p className="text-xl font-semibold text-blue_color">
                        The Ai Chatbot
                    </p>
                </div>

                {/* Chat Content */}
                <div className="flex flex-col gap-8  items-end justify-end h-full min-h-[65vh] max-h-[60vh]  rounded-lg  ">
                    {/* Chat Box */}
                    <div className="h-full min-h-[19rem] max-h-[19rem]  w-full overflow-y-auto ">
                        <ScrollBarFeed>
                            <div className="flex flex-col w-full h-full gap-2">
                                {chatBotAi?.chatLog?.map(
                                    (item: any, i: number) => (
                                        <>
                                            <PChatMessage key={i} item={item} />
                                        </>
                                    )
                                )}

                                {loading && (
                                    <div className="flex w-full h-full justify-start items-start">
                                        <div className="lds-ellipsis">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollBarFeed>
                    </div>

                    {/* Input */}

                    <form
                        onSubmit={handleSubmit}
                        className=" flex gap-5 items-center justify-between self-end p-2 rounded-2xl w-full"
                    >
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Type your message"
                            className="w-full bg-white  rounded-2xl  text-sm bg-transparent px-4 py-3 "
                        />
                        <button
                            type="submit"
                            className="cursor-pointer bg-white py-3 px-5 rounded-2xl"
                        >
                            <GrSend className="text-xl !text-blue_color " />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PChatBoxHero;
