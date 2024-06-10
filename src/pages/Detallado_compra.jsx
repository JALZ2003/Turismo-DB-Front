import buscar from '../assets/buscar.svg';

export default function Detallado_compra() {
    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> DETALLADO DE COMPRA </h1>
            <main className="flex flex-col h-screen">

                <div className='w-full h-[30%] flex items-center justify-center'>
                    <div className='flex border border-[#56A6E9] w-[225px] h-[43px] rounded-[4px]'>
                        <img className='h-[20px] w-[20px] m-2' src={buscar} alt="Buscar" />
                        <input className='w-full h-full outline-none rounded-[4px] pb-1' type="text" placeholder='Buscar Titulos' />
                    </div>
                </div>
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[14.2%]'> Codigo Plan </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Codigo Compra </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Fecha Inicio Del viaja </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Fecha Fin Del viaje </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Valor Total Compra </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Id Cliente </th>
                                <th className='p-4 flex justify-center w-[14.2%]'> Id vendesdor </th>
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
                                <td className='p-4 flex justify-center w-[14.2%]'>a</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}