import Search from '../components/Search';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import { useState, useEffect } from 'react';

export default function Cliente() {

    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        let token = localStorage.getItem("token");
        let headers = { headers :{Authorization: `Bearer ${token}`}};
        axios(`${apiUrl}clientes`, headers)
        .then((res)=>console.log(res.data.response))
        .catch((err)=> console.log(err));
    },[]);


    return (
        <>
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
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] border-b-2 border-black h-[45px] w-[100%]'>
                                <td className='p-4 flex justify-center w-[16.6%]'> P-1 </td>
                                <td className='p-4 flex justify-center w-[16.6%]'> PLAN A </td>
                                <td className='p-4 flex justify-center w-[16.6%]'> DECRIPCION DEL PLAN A </td>
                                <td className='p-4 flex justify-center w-[16.6%]'> 10 </td>
                                <td className='p-4 flex justify-center w-[16.6%]'> 10 </td>
                                <td className='p-4 flex justify-center w-[16.6%]'> INCLUYE </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}