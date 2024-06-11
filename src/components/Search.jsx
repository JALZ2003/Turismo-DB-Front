import buscar from '../assets/buscar.svg';

export default function Search() {
    return (
        <div className='w-full h-[30%] flex items-center justify-start ms-16'>
            <div className='flex border border-[#56A6E9] w-[225px] h-[43px] rounded-[4px]'>
                <img className='h-[20px] w-[20px] m-2' src={buscar} alt="Buscar" />
                <input className='w-full h-full outline-none rounded-[4px] pb-1' type="text" placeholder='Buscar Titulos' />
            </div>
        </div>
    )
}
