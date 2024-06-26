import Search from '../components/Search';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import { useEffect, useRef, useState } from 'react';
import FromVendedor from '../components/FromVendedor';
export default function Vendedor() {

    const [vendedor, setVendedor] = useState([]);
    const [formVendedor, setFormVendedor] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        axios.get(`${apiUrl}vendedores/read`, headers)
            .then((res) => { setVendedor(res.data.response); console.log(res.data.response) })
            .catch((err) => console.log(err));
    }, [])


    return (
        <>
            {formVendedor && (<FromVendedor setFormVendedor={setFormVendedor} formVendedor={formVendedor} />)}
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> VENDEDOR </h1>
            <main className="flex flex-col h-screen">

                <Search />
                <div onClick={() => setFormVendedor(!formVendedor)} className='bg-blue-500 w-[100px] flex justify-center items-center self-end mr-16 mb-10 p-2 rounded-lg hover:cursor-pointer hover:scale-110' >
                    <h1 className='text-white font-bold'>Agregar</h1>
                </div>
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[14.2%]'> Cedula De Vendedor </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Usuario </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Nombre </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Correo </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Telefono </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Fecha De Nacimiento </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Acciones </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            {vendedor.map((each, index) => {
                                return <tr key={index} className='flex justify-around items-center text-[14px] border-b-2 border-black w-[100%]'>
                                    <td className='p-4 flex justify-center w-[14.5%]'>{each.cedula}</td>
                                    <td className='p-4 flex justify-center w-[14.5%]'>{each.usuario}</td>
                                    <td className='p-4 flex justify-center w-[14.5%]'>{each.nombre}</td>
                                    <td className='p-4 flex justify-center w-[14.5%]'>{each.correo}</td>
                                    <td className='p-4 flex justify-center w-[14.5%]'>{each.telefono}</td>
                                    <td className='p-4 flex justify-center w-[14.5%]'>{each.fecha_nacimiento}</td>
                                    <td className='p-4 flex justify-center w-[14.5%]'>
                                        <div className='bg-cyan-500 hover:cursor-pointer text-white p-2 rounded-md hover:scale-110'>Editar</div>
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