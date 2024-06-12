import Search from '../components/Search';
import axios from 'axios';
import apiUrl from '../../apiUrl';
import { useState, useEffect } from 'react';
import header from '../../header';


export default function Detallado_compra() {
    const [compraCliente, setCompraCliente] = useState([]);

    useEffect(() => {
        axios(apiUrl + "compras/read/cliente", header())
            .then((res) => { setCompraCliente(res.data.response); console.log(res.data.response) })
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> PLANES QUE COMPRO UN CLIENTE </h1>
            <main className="flex flex-col h-screen">

                <Search />
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[50%]'> Codigo Plan </th>
                                <th className='p-4 flex justify-center w-[50%]'> Fecha De Compra </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            {compraCliente.map((each, index) => {
                                return <tr key={index} className='flex justify-around items-center text-[14px] border-b-2 border-black w-[100%]'>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.codigo_plan}</td>
                                    <td className='p-4 flex justify-center w-[14.2%]'>{each.fecha_compra}</td>
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