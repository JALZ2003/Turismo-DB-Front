
export default function FormCompra() {
    return (
        <>
            <div className="flex w-full justify-center items-center">
                <div className="w-[100%] relative">
                    <input className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="codigocompra" id="codigocompra" />
                    <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="codigocompra">
                        CODIGO COMPRA
                    </label>
                    <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                        <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                    </svg>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="w-[100%] relative">
                    <input className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="fechacompra" id="fechacompra" />
                    <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="fechacompra">
                        FECHA DE COMPRA
                    </label>
                    <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                        <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                    </svg>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="w-[100%] relative">
                    <input className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="number" placeholder="" name="costototalpaquetes" id="costototalpaquetes" />
                    <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="costototalpaquetes">
                        COSTO TOTAL DE PAQUETES
                    </label>
                    <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                        <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                    </svg>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="w-[100%] relative">
                    <input className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="number" placeholder="" name="costototalalimentacion" id="costototalalimentacion" />
                    <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="costototalalimentacion">
                        COSTO TOTAL DE ALIMENTACION
                    </label>
                    <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                        <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                    </svg>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="w-[100%] relative">
                    <input className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="number" placeholder="" name="totalcompra" id="totalcompra" />
                    <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="totalcompra">
                        TOTAL DE COMPRA
                    </label>
                    <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                        <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                    </svg>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="w-[100%] relative">
                    <input className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="idcliente" id="idcliente" />
                    <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="idcliente">
                        ID CLIENTE
                    </label>
                    <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                        <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                    </svg>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="w-[100%] relative">
                    <input className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="idvendedor" id="idvendedor" />
                    <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="idvendedor">
                        ID VENDEDOR
                    </label>
                    <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                        <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                    </svg>
                </div>
            </div>
        </>
    )
}
