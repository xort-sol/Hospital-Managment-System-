import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type Props = {};

const RootDashboard: FC<Props> = () => {
    const { authLoading, user } = useSelector((state: any) => state.auth);
    // const navigate = useNavigate();

    if (authLoading) return <div>Loading</div>;
    if (user?.role === "patient") {
        return <Navigate to="/patient/dashboard" />;
    }

    if (user?.role === "hospital") {
        return <Navigate to="/hospital/dashboard" />;
    }

    if (user?.role === "ambulance") {
        return <Navigate to="/ambulance/dashboard" />;
    }

    // useEffect(() => {
    //     if (user?.role === "patient") {
    //         navigate("/patient/dashboard");
    //         // return undefined;
    //     }

    //     if (user?.role === "hospital") {
    //         navigate("/hospital/dashboard");
    //         // return undefined;
    //     }

    //     if (user?.role === "ambulance") {
    //         navigate("/ambulance/dashboard");
    //         // return undefined;
    //     }
    // }, [user, navigate]);

    return <div>RootDashboard</div>;
};

export default RootDashboard;
