import { FC, useState } from "react";

import mc1 from "../../../../../assets/dashboardIcons/h/mc1.png";
import mc2 from "../../../../../assets/dashboardIcons/h/mc2.png";
import { BsPlus } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

type Props = {};

const HAddFormItems: FC<Props> = () => {
    const [initialQuestion, setInitialQuestion] = useState<any>({
        label: "",
        questions: "",
    });

    const [questionOptions, setQuestionOptions] = useState([{ value: "" }]);

    const [questionType, setQuestionType] = useState<any>("yesandno"); // Default to "Yes or No" type
    const [questionData, setQuestionData] = useState<any>([]); // Array to store question data

    const handleAddQuestion = () => {
        // Check the question type and create the appropriate question data
        let newQuestion;
        if (questionType === "yesandno") {
            newQuestion = {
                label: initialQuestion.label,
                questions: initialQuestion.questions,
                type: "yesandno",
                options: ["yes", "no"],
            };
        } else if (questionType === "mcq") {
            newQuestion = {
                label: initialQuestion.label,
                questions: initialQuestion.questions,

                type: "mcq",
                options: questionOptions.map((option) => option.value),
            };
        }

        // Add the new question to the questionData array
        setQuestionData([...questionData, newQuestion]);

        // Clear the input fields
        setInitialQuestion({ label: "", questions: "" });
        setQuestionOptions([{ value: "" }]);
    };

    const handleAddOption = () => {
        setQuestionOptions([...questionOptions, { value: "" }]);
    };

    const handleOptionChange = (value: string, index: number) => {
        const updatedOptions = [...questionOptions];
        updatedOptions[index].value = value;
        setQuestionOptions(updatedOptions);
    };

    const handleDeleteOption = (index: number) => {
        const updatedOptions = [...questionOptions];
        updatedOptions.splice(index, 1);
        setQuestionOptions(updatedOptions);
    };

    console.log(questionData);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 p-5">
            <div className="w-full h-full">
                <label>
                    <p className="my-5 font-semibold text-blue_color text-xl">
                        Label:
                    </p>
                    <input
                        required
                        type="text"
                        value={initialQuestion?.label}
                        onChange={(e) =>
                            setInitialQuestion({
                                ...initialQuestion,
                                label: e.target.value,
                            })
                        }
                        className="w-full h-full py-3 px-5 rounded-full"
                    />
                </label>
            </div>

            <div className="w-full h-full">
                <label>
                    <p className="my-5 font-semibold text-blue_color text-xl">
                        Question:
                    </p>
                    <input
                        required
                        type="text"
                        value={initialQuestion?.questions}
                        onChange={(e) =>
                            setInitialQuestion({
                                ...initialQuestion,
                                questions: e.target.value,
                            })
                        }
                        className="w-full h-full py-3 px-5 rounded-full"
                    />
                </label>
            </div>

            <div className="w-full h-full my-5">
                <label>
                    <p className="my-5 font-semibold text-blue_color text-xl">
                        Select Answer Type
                    </p>

                    <div className="flex justify-center items-center gap-10">
                        <div
                            className={` ${
                                questionType === "yesandno"
                                    ? "border-2 border-blue_color"
                                    : "border-2 border-transparent"
                            } w-40 h-40 rounded-md shadow-md p-2 flex gap-5 duration-200 cursor-pointer flex-col justify-center items-center bg-white`}
                            onClick={() => setQuestionType("yesandno")}
                        >
                            <img
                                src={mc1}
                                alt="yesorno"
                                className=" w-20 h-20 object-cover"
                            />

                            <p className="text-sm">Yes Or No</p>
                        </div>

                        <div
                            className={` ${
                                questionType === "mcq"
                                    ? "border-2 border-blue_color"
                                    : "border-2 border-transparent"
                            } w-40 h-40 rounded-md shadow-md p-2 flex gap-5 duration-200 cursor-pointer flex-col justify-center items-center bg-white`}
                            onClick={() => setQuestionType("mcq")}
                        >
                            <img
                                src={mc2}
                                alt="mcq"
                                className=" w-20 h-20 object-cover"
                            />

                            <p className="text-sm ">Multiple Choices</p>
                        </div>
                    </div>
                </label>
            </div>
            {questionType === "mcq" && (
                <div className="flex flex-col justify-center items-center w-full gap-10">
                    {questionOptions.map((option, index) => (
                        <label
                            key={index}
                            className="flex w-full h-full p-2 justify-center items-center gap-10"
                        >
                            <input
                                required
                                type="text"
                                value={option.value}
                                onChange={(e) =>
                                    handleOptionChange(e.target.value, index)
                                }
                                className="w-10/12 py-2 px-4 rounded-full shadow"
                            />

                            <button
                                onClick={() => handleDeleteOption(index)}
                                disabled={questionOptions.length === 1}
                            >
                                <MdDelete
                                    className={`${
                                        questionOptions.length === 1
                                            ? "text-gray-400 cursor-not-allowed"
                                            : "text-red-400 hover:text-red-600"
                                    } text-3xl  duration-200`}
                                />
                            </button>
                        </label>
                    ))}
                    <button
                        onClick={handleAddOption}
                        className="flex justify-center items-center gap-5"
                    >
                        <AiFillPlusCircle className="text-4xl text-blue_color" />
                        <p className="text-blue_color">Add Choice</p>
                    </button>
                </div>
            )}
            <button
                onClick={handleAddQuestion}
                className="text-lg text-blue_color flex justify-start items-center w-full gap-5"
            >
                <BsPlus className="text-4xl" />

                <p>Add Question</p>
            </button>
            {/* Display the added questions */}
            <div className="w-full h-full">
                <ul className="flex flex-col w-full">
                    {questionData.map((question: any, index: number) => (
                        <div
                            className="w-full h-full flex flex-col gap-2 justify-start items-start"
                            key={index}
                        >
                            <h1 className="text-lg font-semibold text-blue_color my-5">
                                Question {index + 1}
                            </h1>

                            <p className="text-xl">Label: {question?.label}</p>
                            <p className="text-xl">
                                Question: {question?.questions}
                            </p>
                            <li className="list-item">
                                {question.type === "mcq" && (
                                    <>
                                        <strong>Options:</strong>{" "}
                                        {question.options.join(", ")}
                                    </>
                                )}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HAddFormItems;
