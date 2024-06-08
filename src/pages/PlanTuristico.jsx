import buscar from '../assets/buscar.svg';

export default function PlanTuristico() {
    return (
        <>
            <h1 className='absolute w-full h-[100px] text-center text-[#005777] text-[64px]'> PLANES TURISTICOS </h1>
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
                                <th> Codigo Plan </th>
                                <th> Titulo </th>
                                <th> Descripcion </th>
                                <th> Duracion en Días </th>
                                <th> Incluye Desayuno/Almuerzo </th>
                                <th> Incluye Alimentacion </th>
                                <th> Estado </th>
                                <th> Fecha Creacion </th>
                                <th> Fecha Modificacion </th>
                            </tr>
                        </thead>
                        <tbody className='w-[90%]'>
                            <tr className='flex justify-around items-center text-[14px] border-b-2 border-black h-[45px] w-[100%]'>
                                <td> P-1 </td>
                                <td> PLAN A </td>
                                <td> DECRIPCION DEL PLAN A </td>
                                <td> 10 </td>
                                <td> INCLUYE </td>
                                <td> NO INCLUYE </td>
                                <td> ACTIVO </td>
                                <td> 2024-06-06 </td>
                                <td> 2024-06-06 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}