import { FC, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

type Props = {
    children: ReactNode;
    redirect?: string;
    patientRoutes?: boolean;
    hospitalRoutes?: boolean;
    ambulanceRoutes?: boolean;
};

const Protectedroute: FC<Props> = ({
    children,
    redirect,
    patientRoutes,
    hospitalRoutes,
    ambulanceRoutes,
}) => {
    const navigate = useNavigate();

    const { user, authLoading } = useSelector((state: any) => state.auth);

    if (authLoading) {
        return <div>Loading</div>;
    }

    const authenticated = user;

    useEffect(() => {
        if (!authenticated) {
            return navigate(redirect ?? "/");
        }

        if (patientRoutes && user?.role !== "patient") {
            return navigate(redirect ?? "/");
        }

        if (hospitalRoutes && user?.role !== "patient") {
            return navigate(redirect ?? "/");
        }

        if (ambulanceRoutes && user?.role !== "patient") {
            return navigate(redirect ?? "/");
        }
    }, [authenticated, navigate]);

    return children ? children : <Outlet />;
};

export default Protectedroute;
