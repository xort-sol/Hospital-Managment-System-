import { ChangeEvent, FC, useState } from "react";
import { ReusableButton } from "../../../../utils/Components";

type Props = {};

interface FormData {
    name: string;
    docType: string;
    document: File | null;
}

const PMedicalFileUploadDocuments: FC<Props> = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        docType: "",
        document: null,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            setFormData({
                ...formData,
                document: file,
            });
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("docType", formData.docType);
        if (formData.document) {
            data.append("document", formData.document, formData.document.name);
        }

        console.log(data);
    };
    return (
        <div className="w-full h-full my-10">
            <div className="w-full h-full bg-white">
                <div className="flex justify-between px-5 py-3 items-center w-full bg-gradient-to-br text-blue_color from-slate-50 to-slate-200 rounded-md shadow-lg">
                    <h1 className="text-xl font-semibold">Upload Documents</h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full p-5  rounded-md shadow-md"
                >
                    <label className="block mb-2">
                        <span className="text-gray-700">Name:</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </label>

                    {/* <label className="block mb-2">
                        <span className="text-gray-700">Type of Document:</span>
                        <input
                            type="text"
                            name="docType"
                            value={formData.docType}
                            onChange={handleChange}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </label> */}

                    <label className="block mb-4">
                        <span className="text-gray-700">Document:</span>
                        <input
                            type="file"
                            name="document"
                            onChange={handleFileChange}
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                        />
                    </label>

                    <div className="flex w-full justify-center items-center gap-10">
                        <ReusableButton
                            label="Upload"
                            type="submit"
                            customeStyle="bg-gray_color text-white"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PMedicalFileUploadDocuments;
