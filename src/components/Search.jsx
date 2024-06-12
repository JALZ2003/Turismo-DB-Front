import buscar from '../assets/buscar.svg';

export default function Search({ puntos, activo, setActivo, setTitulo, search, almuerzo, setAlmuerzo }) {
    return (
        <div className='w-[100%] flex items-center justify-around h-[200px]'>
            {!puntos ? (
                <>
                    <div className='flex border border-[#56A6E9] w-[225px] h-[43px] rounded-[4px]'>
                        <img className='h-[20px] w-[20px] m-2' src={buscar} alt="Buscar" />
                        <input ref={search} onChange={() => setTitulo(search.current.value?.trim())} className='w-full h-full outline-none rounded-[4px] pb-1' type="text" placeholder='Buscar Titulos' />
                    </div>
                    <div className='flex w-[150px] justify-around border border-[#56A6E9] rounded-[4px]' >
                        <p className='m-2'> Activo </p>
                        <label className="relative inline-flex items-center cursor-pointer m-2">
                            <input type="checkbox" checked={activo} onChange={() => setActivo(!activo)} className="sr-only peer" />
                            <div className="group peer ring-0 bg-gray-400 rounded-full outline-none duration-300 after:duration-300 w-[50px] h-[30px] shadow-md peer-checked:bg-emerald-300  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-checked:after:content-['✔️'] peer-hover:after:scale-95">
                            </div>
                        </label>
                    </div>
                    <div className='flex w-[250px] justify-around border border-[#56A6E9] rounded-[4px]' >
                        <p className='m-2'> Incluye Almuerzo </p>
                        <label className="relative inline-flex items-center cursor-pointer m-2">
                            <input type="checkbox" checked={almuerzo} onChange={() => setAlmuerzo(!almuerzo)} className="sr-only peer" />
                            <div className="group peer ring-0 bg-gray-400 rounded-full outline-none duration-300 after:duration-300 w-[50px] h-[30px] shadow-md peer-checked:bg-emerald-300  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-checked:after:content-['✔️'] peer-hover:after:scale-95">
                            </div>
                        </label>
                    </div>
                </>
            ) : (
                <div>
                    <div
                        class="relative group rounded-lg w-64 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]"
                    >
                        <svg
                            y="0"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            width="100"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid meet"
                            height="100"
                            class="w-8 h-8 absolute right-0 -rotate-45 stroke-blue-300 top-1.5 group-hover:rotate-0 duration-300"
                        >
                            <path
                                stroke-width="4"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                fill="none"
                                d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                                class="svg-stroke-primary"
                            ></path>
                        </svg>
                        <select
                            class="appearance-none hover:placeholder-shown:bg-blue-500 relative text-blue-400 bg-transparent ring-0 outline-none border border-neutral-500 placeholder-blue-700 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option>HTML</option>
                            <option>React</option>
                            <option>Vue</option>
                            <option>Angular</option>
                            <option>Svelte</option>
                        </select>
                    </div>
                </div>
            )}



        </div>
    )
}
