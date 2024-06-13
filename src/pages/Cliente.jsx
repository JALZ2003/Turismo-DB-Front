import Search from '../components/Search';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import { useState, useEffect} from 'react';
import FormCliente from "../components/FormCliente.jsx"

export default function Cliente() {

    const [clientes, setClientes] = useState([]);

    const [formCliente,setFormCliente] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        axios(`${apiUrl}clientes`, headers)
            .then((res) => setClientes(res.data.response))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
        {formCliente && (<FormCliente setFormCliente={setFormCliente} formCliente={formCliente} />)}
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> CLIENTE </h1>
            <main className="flex flex-col h-screen">

                <Search />
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[16.6%]'> Cedula </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Nombre </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Correo </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Telefono #1 </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Telefono #2 </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Fecha De Nacimiento </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Acciones </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            {clientes.map((each, index) => {
                                return <tr key={index} className='flex justify-around items-center text-[14px] border-b-2 border-black h-[45px] w-[100%]'>
                                    <td className='p-4 flex justify-center w-[16.6%]'>{each.cedula}</td>
                                    <td className='p-4 flex justify-center w-[16.6%]'>{each.nombre}</td>
                                    <td className='p-4 flex justify-center w-[16.6%]'>{each.correo}</td>
                                    <td className='p-4 flex justify-center w-[16.6%]'>{each.telefonos[0]}</td>
                                    <td className='p-4 flex justify-center w-[16.6%]'>{each.telefonos[1]}</td>
                                    <td className='p-4 flex justify-center w-[16.6%]'>{each.fecha_nacimiento}</td>
                                    <td className='p-4 flex justify-center w-[16.6%]'>
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