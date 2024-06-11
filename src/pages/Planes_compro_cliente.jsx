import Search from '../components/Search';

export default function Detallado_compra() {
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
                            <tr className='flex justify-around items-center text-[14px] border-b-2 border-black h-[45px] w-[100%]'>
                                <td className='p-4 flex justify-center w-[50%]'>a</td>
                                <td className='p-4 flex justify-center w-[50%]'>a</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}