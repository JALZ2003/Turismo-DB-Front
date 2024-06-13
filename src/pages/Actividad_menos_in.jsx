import Search from '../components/Search';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import { useEffect, useState } from 'react';
import header from '../../header';
import FormCliente from '../components/FormCliente';

export default function Actividad_menos_in() {
    const [actividades, setActividades] = useState([]);
    const [formCliente,setFormCliente] = useState(false);

    useEffect(() => {
        axios(apiUrl + "compras/read/menosVendidos", header())
            .then((res) => { setActividades(res.data.response); console.log(res.data.response) })
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
        {formCliente && (<FormCliente setFormCliente={setFormCliente} formCliente={formCliente} />)}
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> ACTIVIDADES MENOS INCLUIDAS </h1>
            <main className="flex flex-col h-screen">

                <Search />
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[12.5%]'> ID Actividad </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Titulo De Actividad</th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Descripcion De La Actividad</th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Departamento</th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Cuidad</th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Estado </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Fecha Creacion </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Fecha Modificacion </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Acciones </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            {actividades.map((each, index) => {
                                return <tr key={index} className='flex justify-around items-center text-[14px] border-b-2 border-black w-[100%]'>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.id_actividad}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.titulo_actividad}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.descripcion_actividad}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.nombre_departamento}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.nombre_ciudad}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.estado ? "ACTIVO" : "INACTIVO"}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.fecha_creacion}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>{each.fecha_modificacion}</td>
                                    <td className='p-4 flex justify-center w-[12.5%]'>
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