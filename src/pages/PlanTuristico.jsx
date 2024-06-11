import Search from '../components/Search';

export default function PlanTuristico() {
    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> PLANES TURISTICOS </h1>
            <main className="flex flex-col h-screen">

                <Search/>
                <div className='w-full'>
                    <table className='w-full flex flex-col items-center'>
                        <thead className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] text-[#0077B6] border-b-2 border-[#0077B6] h-[45px] w-[100%]'>
                                <th className='p-4 flex justify-center w-[10%]'> Codigo Plan </th>
                                <th className='p-4 flex justify-center w-[10%]'> Titulo </th>
                                <th className='p-4 flex justify-center w-[10%]'> Descripcion </th>
                                <th className='p-4 flex justify-center w-[10%]'> Duracion en Días </th>
                                <th className='p-4 flex justify-center w-[10%]'> Incluye Desayuno/Almuerzo </th>
                                <th className='p-4 flex justify-center w-[10%]'> Incluye Alimentacion </th>
                                <th className='p-4 flex justify-center w-[10%]'> Estado </th>
                                <th className='p-4 flex justify-center w-[10%]'> Fecha Creacion </th>
                                <th className='p-4 flex justify-center w-[10%]'> Fecha Modificacion </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] border-b-2 border-black h-[45px] w-[100%]'>
                                <td className='flex justify-center w-[10%]'> P-1 </td>
                                <td className='flex justify-center w-[10%]'> PLAN A </td>
                                <td className='flex justify-center w-[10%]'> DECRIPCION DEL PLAN A </td>
                                <td className='flex justify-center w-[10%]'> 10 </td>
                                <td className='flex justify-center w-[10%]'> INCLUYE </td>
                                <td className='flex justify-center w-[10%]'> NO INCLUYE </td>
                                <td className='flex justify-center w-[10%]'> ACTIVO </td>
                                <td className='flex justify-center w-[10%]'> 2024-06-06 </td>
                                <td className='flex justify-center w-[10%]'> 2024-06-06 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}