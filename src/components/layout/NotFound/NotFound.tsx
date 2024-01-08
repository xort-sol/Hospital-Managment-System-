import { BsExclamationTriangle } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link if you're using React Router

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <div className="text-4xl flex justify-center items-center flex-col gap-5 font-semibold text-red-600 mb-2">
                    <BsExclamationTriangle />
                    <p>404 Error</p>
                </div>
                <p className="text-xl my-5 text-gray-600">
                    Page not found. The page you are looking for does not exist.
                </p>
                <Link to="/" className="mt-4 text-blue-500 hover:underline">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
