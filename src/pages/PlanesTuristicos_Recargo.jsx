import Search from '../components/Search';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import { useEffect, useState } from 'react';
import header from '../../header.js'
import FormCliente from '../components/FormCliente.jsx';

export default function PlanesTuristicos_Recargo() {
    const [recargo, setRecargo] = useState([]);
    const [formCliente, setFormCliente] = useState(false);
    useEffect(() => {
        axios(apiUrl + "compras/read/planesCargos", header())
            .then((res) => { setRecargo(res.data.response); console.log(res.data.response) })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            {formCliente && (<FormCliente setFormCliente={setFormCliente} formCliente={formCliente} />)}
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> PLANES TURISTICOS CON RECARGO</h1>
            <main className="flex flex-col h-screen">

                <Search />
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
                                <th className='p-4 flex justify-center w-[10%]'> Acciones </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            {recargo.map((each, index) => {
                                return <tr key={index} className='flex justify-around items-center text-[14px] border-b-2 border-black w-[100%]'>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.codigo_plan}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.titulo_plan}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.descripcion_plan}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.cantidad_dias_duracion}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.desayuno_almuerzo ? "SI" : "NO"}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.alimentacion ? "SI" : "NO"}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.estado ? "ACTIVO" : "INACTIVO"}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.fecha_creacion}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.fecha_modificacion}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>
                                        <div onClick={() => setFormCliente(!formCliente)} className='bg-cyan-500 hover:cursor-pointer text-white p-2 rounded-md hover:scale-110'>Editar</div>
                                        <div className='bg-red-500 hover:cursor-pointer text-white p-2 rounded-md hover:scale-110 ms-1'>Borrar</div>
                                    </td>
                                </tr>
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}