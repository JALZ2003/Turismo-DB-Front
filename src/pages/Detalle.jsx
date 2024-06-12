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
                                <th className='p-4 flex justify-center w-[12.5%]'> Fecha De Compra </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Codigo Plan </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Cedula </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Nombre </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Correo </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Fecha De Nacimiento </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Telefono#1 </th>
                                <th className='p-4 flex justify-center w-[12.5%]'> Telefono#2 </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] border-b-2 border-black h-[45px] w-[100%]'>
                                <td className='p-4 flex justify-center w-[12.5%]'> P-1 </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> PLAN A </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> DECRIPCION DEL PLAN A </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> 10 </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> INCLUYE </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> NO INCLUYE </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> adfed </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> adfed </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}