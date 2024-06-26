import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import Menu from './Menu';
import apiUrl from '../../apiUrl.js';
import axios from 'axios';

function header() {
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    return headers;
}

async function signout(event) {
    event.preventDefault();
    try {
        await axios.post(
            apiUrl + "vendedores/signout", //url a consumir
            null, //objeto con data a enviar
            header() //objeto con autorización
        );
    } catch (error) {
        console.log(error);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.replace("/signin");
}


export default function Navbar() {


    const usuarioRef = useRef();
    const menuRef = useRef();

    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== usuarioRef.current) {
            setOpen(false);
        }
    });

    const [open, setOpen] = useState(false);
    const [option, setOption] = useState([]);
    let user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if (user) {
            if (user.usuario === "vendedor") {
                setOption([
                    { to: '/planTuristico', title: "Plan turistico" },
                    { to: '/cliente', title: "Cliente" },
                    { to: '/compra', title: "Compra" },
                    { to: '/detalle', title: "Consolidado De Compra" },
                    { to: '/actividad_menos_in', title: "Actividades Menos Incluidas" },
                    { to: '/planesturisticos_Recargo', title: "Planes Turisticos Con Recargo" },
                    { to: '/planes_compro_cliente', title: "Planes Que Compro Cliente" },
                    { to: '/signin', title: "Sign Out", onClick: signout },
                ])
            } else if (user.usuario === "superadmin") {
                setOption([
                    { to: '/planTuristico', title: "Plan turistico" },
                    { to: '/puntos_visita', title: "Puntos de visita" },
                    { to: '/tarifa', title: "Tarifa" },
                    { to: '/vendedor', title: "Vendedor" },
                    { to: '/compra', title: "Compra" },
                    { to: '/detalle', title: "Consolidado De Compra" },
                    { to: '/actividad_menos_in', title: "Actividades Menos Incluidas" },
                    { to: '/planesturisticos_Recargo', title: "Planes Turisticos Con Recargo" },
                    { to: '/planes_compro_cliente', title: "Planes Que Compro Cliente" },
                    { to: '/signin', title: "Sign Out", onClick: signout },
                    
                ])
            }
        } else {
            setOption([
                { to: '/planTuristico', title: "Plan turistico" },
                { to: '/puntos_visita', title: "Puntos de visita" },
                { to: '/tarifa', title: "Tarifa" },
                { to: '/compra', title: "Compra" },
                { to: '/vendedor', title: "Vendedor" },
                { to: '/cliente', title: "Cliente" },
                { to: '/detallado_compra', title: "Detallado de compra" },
                { to: '/detalle', title: "Consolidado De Compra" },
                { to: '/actividad_menos_in', title: "Actividades Menos Incluidas" },
                { to: '/planesturisticos_Recargo', title: "Planes Turisticos Con Recargo" },
                { to: '/planes_compro_cliente', title: "Planes Que Compro Cliente" },
                { to: '/signin', title: "Sign In" },
            ])
        }
    }, [])
    return (
        <>
            {open && (<Menu ref={menuRef} option={option} setOpen={setOpen} open={open} />)}
            <nav className="border-b-2 border-black flex items-center justify-between pr-5 pl-5">
                <img className='w-[100px]' src={logo} alt="Logo" />
                <p ref={usuarioRef} onClick={() => setOpen(!open)} className='text-[#0077B6] hover:cursor-pointer z-20 font-bold'> Usuario </p>

            </nav>
        </>

    )
}