import axios from "axios";
import { useRef } from "react";
import apiUrl from "../../apiUrl";
import Swal from "sweetalert2";
import header from "../../header"




export default function FromVendedor({ setFormVendedor }) {
    
    const cedula = useRef();
    const usuario = useRef();
    const correo = useRef();
    const contraseña = useRef();
    const fecha_nacimiento = useRef();
    const nombre = useRef();
    const telefono = useRef();

    const postVendedor = () => {
        let data = {
            cedula: cedula.current.value?.trim(),
            contraseña: contraseña.current.value?.trim(),
            correo: correo.current.value?.trim(),
            fecha_nacimiento: fecha_nacimiento.current.value?.trim(),
            nombre: nombre.current.value?.trim(),
            telefono: telefono.current.value?.trim(),
            usuario: usuario.current.value?.trim(),
        }
        console.log(data)
        axios.post(apiUrl+"vendedores/register",data, header()).then(() => {
            Swal.fire({
                icon: "success",
                title: "Vendedor Creado",
                confirmButtonColor: "#F97316"
            })  
            setFormVendedor(false)
        })
        .catch(error =>
            Swal.fire({
                icon: "error",
                title: "Error al crear VENDEDOR",
                html: error.response.data.messages.map(each => `<p>${each}</p>`).join(""),
                confirmButtonColor: "#F97316"
            })
        )
        
        
    }

    
    return (
        <div className="bg-slate-500 w-[100%] h-[100%] absolute inset-0 flex flex-col justify-center items-center bg-opacity-60 z-20">
            <div className="w-[90%] flex flex-col justify-center items-center bg-blue-300 h-[80%] rounded-lg gap-2">
                <div className="text-5xl text-white">NUEVO VENDEDOR</div>
                <div className="flex w-[50%] justify-center items-center">
                    <div className="w-[100%] relative">
                        <input ref={cedula} className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="number" placeholder="" name="cedulavendedor" id="cedulavendedor" />
                        <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="cedulavendedor">
                            CEDULA VENDEDOR
                        </label>
                        <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                            <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                        </svg>
                    </div>
                </div>
                <div className="flex w-[50%] justify-center items-center">
                    <div className="w-[100%] relative">
                        <input ref={usuario} className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="usuario" id="usuario" />
                        <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="usuario">
                            USUARIO
                        </label>
                        <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                            <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                        </svg>
                    </div>
                </div>
                <div className="flex w-[50%] justify-center items-center">
                    <div className="w-[100%] relative">
                        <input ref={nombre} className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="nombre" id="nombre" />
                        <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="nombre">
                            NOMBRE
                        </label>
                        <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                            <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                        </svg>
                    </div>
                </div>
                <div className="flex w-[50%] justify-center items-center">
                    <div className="w-[100%] relative">
                        <input ref={correo} className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="correo" id="correo" />
                        <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="correo">
                            CORREO
                        </label>
                        <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                            <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                        </svg>
                    </div>
                </div>
                <div className="flex w-[50%] justify-center items-center">
                    <div className="w-[100%] relative">
                        <input ref={contraseña} className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="contraseña" id="contraseña" />
                        <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="contraseña">
                            CONTRASEÑA
                        </label>
                        <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                            <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                        </svg>
                    </div>
                </div>
                <div className="flex w-[50%] justify-center items-center">
                    <div className="w-[100%] relative">
                        <input ref={telefono} className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="number" placeholder="" name="telefono" id="telefono" />
                        <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="telefono">
                            TELEFONO
                        </label>
                        <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                            <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                        </svg>
                    </div>
                </div>
                <div className="flex w-[50%] justify-center items-center">
                    <div className="w-[100%] relative">
                        <input ref={fecha_nacimiento} className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="date" placeholder="" name="fechanacimiento" id="fechanacimiento" />
                        <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="fechanacimiento">
                            FECHA DE NACIMIENTO
                        </label>
                        <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                            <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                        </svg>
                    </div>
                </div>
                <button onClick={postVendedor}  type="button" className="mt-9 bg-lime-300 p-3 rounded-md font-bold text-blue-600 hover:scale-110">Guardar</button>
            </div>
        </div>
    )
}
