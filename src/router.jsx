import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

export default createBrowserRouter([
    {
        path: '/signin', element: <Login />
    }
]);