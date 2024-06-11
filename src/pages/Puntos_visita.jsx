import Search from '../components/Search';

export default function Puntos_visita() {
    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> PUNTOS DE VISITA </h1>
            <main className="flex flex-col h-screen">

                <Search/>
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
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] border-b-2 border-black h-[45px] w-[100%]'>
                                <td className='p-4 flex justify-center w-[12.5%]'> P-1 </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> PLAN A </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> DECRIPCION DEL PLAN A </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> Boyaca </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> bonita </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> ACTIVO </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> 2024-06-06 </td>
                                <td className='p-4 flex justify-center w-[12.5%]'> 2024-06-06 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}