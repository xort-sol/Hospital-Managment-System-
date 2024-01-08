import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changerole } from "../../../redux/features/auth/authSlice";

const Home = () => {
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Link
                to={"/signup"}
                className={
                    "text-2xl m-5 bg-red-400 p-3 rounded-md text-white hover:underline"
                }
            >
                Register
            </Link>

            <Link
                to={"/login"}
                className={
                    "text-2xl m-5 bg-red-400 p-3 rounded-md text-white hover:underline"
                }
            >
                Login
            </Link>

            <Link
                to={"/patient/dashboard"}
                onClick={() => dispatch(changerole("patient"))}
                className={
                    "text-2xl m-5 bg-red-400 p-3 rounded-md text-white hover:underline"
                }
            >
                Patient
            </Link>

            <Link
                to={"/hospital/addpatient"}
                onClick={() => dispatch(changerole("hospital"))}
                className={
                    "text-2xl m-5 bg-red-400 p-3 rounded-md text-white hover:underline"
                }
            >
                Hospital
            </Link>

            <Link
                to={"/doctor/addpatient"}
                onClick={() => dispatch(changerole("doctor"))}
                className={
                    "text-2xl m-5 bg-red-400 p-3 rounded-md text-white hover:underline"
                }
            >
                Doctor
            </Link>

            <Link
                to={"/ambulance/addpatient"}
                onClick={() => dispatch(changerole("ambulance"))}
                className={
                    "text-2xl m-5 bg-red-400 p-3 rounded-md text-white hover:underline"
                }
            >
                Ambulance
            </Link>

            <Link
                to={"/hospital/patientdetails/123"}
                className={
                    "text-2xl m-5 bg-red-400 p-3 rounded-md text-white hover:underline"
                }
            >
                Patient Details
            </Link>
        </div>
    );
};

export default Home;
