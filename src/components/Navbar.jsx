import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import Menu from './Menu';

export default function Navbar() {
    const usuarioRef = useRef();
    const menuRef = useRef();

    window.addEventListener("click",(e)=>{
        if(e.target !== menuRef.current && e.target !== usuarioRef.current){
            setOpen(false);
        }
    });

    const [open, setOpen] = useState(false);
    const [option, setOption] = useState([]);
    useEffect(() => {
        setOption([
            { to: '/', title: "Inicio" },
            { to: '/planTuristico', title: "Plan turistico" },
            { to: '/puntos_visita', title: "Puntos de visita" },
            { to: '/tarifa', title: "Tarifa" },
            { to: '/compra', title: "Compra" },
            { to: '/vendedor', title: "Vendedor" },
            { to: '/cliente', title: "Cliente" },
            { to: '/detallado_compra', title: "Detallado de compra" },
        ])
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