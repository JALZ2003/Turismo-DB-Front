import axios from 'axios';
import Search from '../components/Search';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import apiUrl from '../../apiUrl.js';
import header from '../../header.js';

export default function PlanTuristico() {

    const search = useRef();
    const [planes, setPlanes] = useState([]);
    const [activo, setActivo] = useState(true);
    const [almuerzo, setAlmuerzo] = useState(false);
    const [titulo, setTitulo] = useState("");

    useEffect(() => {
        axios.get(`${apiUrl}planesTuristicos?estado=${activo}&titulo_plan=${titulo}&alimentacion=${almuerzo}&desayuno_almuerzo=${!almuerzo}`, header()).then((res) => {
            setPlanes(res.data.response);
        })
    }, [activo, titulo, almuerzo]);

    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> PLANES TURISTICOS </h1>
            <main className="flex flex-col">
                <Search visible={true} puntos={false} activo={activo} setActivo={setActivo} setTitulo={setTitulo} search={search} almuerzo={almuerzo} setAlmuerzo={setAlmuerzo}/>
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[10%]'> Codigo Plan </th>
                                <th className='p-4 flex justify-center w-[10%]'> Titulo </th>
                                <th className='p-4 flex justify-center w-[10%]'> Descripcion </th>
                                <th className='p-4 flex justify-center w-[10%]'> Duracion en Días </th>
                                <th className='p-4 flex justify-center w-[10%]'> Incluye Desayuno/Almuerzo </th>
                                <th className='p-4 flex justify-center w-[10%]'> Incluye Alimentacion </th>
                                <th className='p-4 flex justify-center w-[10%]'> Estado </th>
                                <th className='p-4 flex justify-center w-[10%]'> Fecha Creacion </th>
                                <th className='p-4 flex justify-center w-[10%]'> Fecha Modificacion </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            {planes.map((plan, index) => {
                                return <tr key={index} className='flex justify-around items-center text-[14px] border-b-2 border-black w-[100%]'>
                                    <td className='flex justify-center w-[10%]'> {plan.codigo_plan} </td>
                                    <td className='flex justify-center w-[10%]'> {plan.titulo_plan} </td>
                                    <td className='flex justify-center w-[10%]'> {plan.descripcion_plan} </td>
                                    <td className='flex justify-center w-[10%]'> {plan.cantidad_dias_duracion} </td>
                                    <td className='flex justify-center w-[10%]'> {plan.desayuno_almuerzo ? "INCLUYE" : "NO INCLUYE"} </td>
                                    <td className='flex justify-center w-[10%]'> {plan.alimentacion ? "INCLUYE" : "NO INCLUYE"} </td>
                                    <td className='flex justify-center w-[10%]'> {plan.estado ? "ACTIVO" : "INACTIVO"} </td>
                                    <td className='flex justify-center w-[10%]'> {plan.fecha_creacion} </td>
                                    <td className='flex justify-center w-[10%]'> {plan.fecha_modificacion} </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}