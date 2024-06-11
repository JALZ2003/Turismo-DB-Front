import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import PlanTuristico from "./pages/PlanTuristico";
import Main from "./layouts/Main";
import Puntos_visita from "./pages/Puntos_visita";
import Tarifa from "./pages/Tarifa";
import Compra from "./pages/Compra";
import Vendedor from "./pages/Vendedor";
import Cliente from "./pages/Cliente";
import Detallado_compra from "./pages/Detallado_compra";
import Detalle from "./pages/Detalle";
import Actividad_menos_in from "./pages/Actividad_menos_in";

export default createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/planTuristico', element: <PlanTuristico /> },
            { path: '/puntos_visita', element: <Puntos_visita /> },
            { path: '/tarifa', element: <Tarifa /> },
            { path: '/compra', element: <Compra /> },
            { path: '/vendedor', element: <Vendedor /> },
            { path: '/cliente', element: <Cliente /> },
            { path: '/detallado_compra', element: <Detallado_compra /> },
            { path: '/detalle', element: <Detalle /> },
            { path: '/actividad_menos_in', element: <Actividad_menos_in /> },
        ]
    },
    {
        path: '/signin', element: <Login />
    },


]);