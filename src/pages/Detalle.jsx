import Search from '../components/Search';

export default function Detalle() {
    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> CONSOLIDADO DE COMPRA </h1>
            <main className="flex flex-col h-screen">

                <Search/>
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[14.2%]'> Fecha De Compra </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Codigo Plan </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Cedula </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Nombre </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Correo </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Fecha De Nacimiento </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Telefonos </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] border-b-2 border-black h-[45px] w-[100%]'>
                                <td className='p-4 flex justify-center w-[14.2%]'> P-1 </td>
                                <td className='p-4 flex justify-center w-[14.2%]'> PLAN A </td>
                                <td className='p-4 flex justify-center w-[14.2%]'> DECRIPCION DEL PLAN A </td>
                                <td className='p-4 flex justify-center w-[14.2%]'> 10 </td>
                                <td className='p-4 flex justify-center w-[14.2%]'> INCLUYE </td>
                                <td className='p-4 flex justify-center w-[14.2%]'> NO INCLUYE </td>
                                <td className='p-4 flex justify-center w-[14.2%]'> adfed </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}