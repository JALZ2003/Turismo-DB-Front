import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import PlanTuristico from "./pages/PlanTuristico";
import Main from "./layouts/Main";

export default createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/planTuristico', element: <PlanTuristico /> }
        ]
    },
    {
        path: '/signin', element: <Login />
    },

]);