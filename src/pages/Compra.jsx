import Search from '../components/Search';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import { useEffect, useState } from 'react';


export default function Compra() {
    const [compra, setCompra] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("token");
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        axios(apiUrl + "compras", headers)
            .then((res) => { setCompra(res.data.response); console.log(res.data.response) })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> COMPRA </h1>
            <main className="flex flex-col h-screen">

                <Search />
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[14.2%]'> Codigo Compra </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Fecha De Compra </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Costo Total De Paquetes </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Costo Total De Alimentacion </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Total Compra </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Id Cliente </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Id vendesdor </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            {compra.map((each, index) => {
                                return <tr key={index} className='flex justify-around items-center text-[14px] border-b-2 border-black h-[45px] w-[100%]'>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.codigo_compra}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.fecha_compra}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.costo_total_paquetes}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.costo_total_alimentacion}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.total_compra}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.id_cliente}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.id_vendedor}</td>
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