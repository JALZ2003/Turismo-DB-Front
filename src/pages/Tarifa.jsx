import Search from '../components/Search';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import { useState, useEffect } from 'react';



export default function Tarifa() {
    const [tarifa, setTarifa] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("token");
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        axios.get(`${apiUrl}tarifas`, headers)
            .then((res) => { setTarifa(res.data.response); console.log(res.data.response) })
            .catch((err) => console.log(err));
    },[])
    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> TARIFA </h1>
            <main className="flex flex-col h-screen">

                <Search />
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[16.6%]'> Id Tarifa </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Codigo plan </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Nombre De La Temporada </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Costo </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Fecha Inicio De La Temporada </th>
                                <th className='p-4 flex justify-center w-[16.6%]'> Fecha Fin De La Temporada </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            <tr className='flex flex-col justify-around items-center text-[14px] border-b-2 border-black w-[100%]'>
                            {tarifa.map((each, index) => {
                                return <tr key={index} className='flex justify-around items-center text-[14px] border-b-2 border-black w-[100%]'>
                                <td className='p-4 flex justify-center w-[12.5%]'>{each.id_tarifa}</td>
                                <td className='p-4 flex justify-center w-[12.5%]'>{each.codigo_plan}</td>
                                <td className='p-4 flex justify-center w-[12.5%]'>{each.nombre_temporada}</td>
                                <td className='p-4 flex justify-center w-[12.5%]'>{each.costo}</td>
                                <td className='p-4 flex justify-center w-[12.5%]'>{each.fecha_inicio_temporada}</td>
                                <td className='p-4 flex justify-center w-[12.5%]'>{each.fecha_fin_temporada}</td> 
                            </tr>
                            }
                            )}                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}